import http from "http";

const server = http.createServer((req, res) => {
  console.info(req.method);
  console.info(req.url);

  if (req.url === "fahmi") {
    res.write("Fahmi");
  } else {
    res.write("Bukan Fahmi");
  }
  
  res.end()
});

server.listen(3000);