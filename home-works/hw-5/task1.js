import http from "http";

// Задание 1
const server = http.createServer((req, res) => {
  const authHeader = req.headers.authorization;

  res.setHeader("Content-Type", "text/plain");

  if (!authHeader) {
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  res.statusCode = 200;
  res.end("Authorization header received");
});

// Задание 2

server.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
