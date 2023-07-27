export class Service {
  todo = ['Programmer', 'Zaman', 'Now'];

  getJson() {
    return JSON.stringify({
      code: 200,
      status: 'Success',
      data: this.todo.map((todo, index) => {
        return {
          id: index,
          todo: todo,
        };
      }),
    });
  }

  getTodo(req, res) {
    res.write(this.getJson());
    res.end();
  }

  createTodo(req, res) {
    req.addListener('data', (data) => {
      const body = JSON.parse(data.toString());
      this.todo.push(body.todo);

      res.write(this.getJson());
      res.end();
    });
  }

  updateTodo(req, res) {
    req.addListener('data', (data) => {
      const body = JSON.parse(data.toString());

      if (this.todo[body.id]) {
        this.todo[body.id] = body.todo;
      }

      res.write(this.getJson());
      res.end();
    });
  }

  deleteTodo(req, res) {
    req.addListener('data', (data) => {
      const body = JSON.parse(data.toString());

      if (this.todo[body.id]) {
        this.todo.splice(body.id, 1);
      }

      res.write(this.getJson());
      res.end();
    });
  }
}
