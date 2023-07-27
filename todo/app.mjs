import http from 'http';

import { Service } from './service.mjs';

const service = new Service();

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    service.getTodo(req, res);
  } else if (req.method === 'POST') {
    service.createTodo(req, res);
  } else if (req.method === 'PUT') {
    service.updateTodo(req, res);
  } else if (req.method === 'DELETE') {
    service.deleteTodo(req, res);
  }
});

server.listen(8000);
