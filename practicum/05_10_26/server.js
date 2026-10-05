import http from "http";
import fs from "fs";

const port = 3333;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().toISOString();

  const log = `${date} | ${method} | ${url}`;

  fs.appendFile("requests.txt", log, (err) => {
    if (err) {
      console.error("Error logging file: ", err);
      res.statusCode = 500;
      res.end("Server error");
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Success logging");
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1/${port}`);
});
