import http from "http";

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");

  const authHeader = request.headers["authorization"];

  console.log(authHeader);

  response.setHeader("Cache-Control", "public, max-age=3600");

  response.end("Authrisation success!");
});

const port = 3333;

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
