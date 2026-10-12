import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "PUT") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("PUT - has worked");
  } else if (req.method === "DELETE") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("DELETE - has worked");
  } else {
    res.statusCode = 400;
    res.end("Method is not allowed");
  }
});

server.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
