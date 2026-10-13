import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 4000;

const server = createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World</h1>");
  console.log("Request recieved");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
