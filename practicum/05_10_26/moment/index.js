import http from "http";
import moment from "moment";

const port = 3333;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  const now = moment().format("YYYY-MM-DD HH:mm:ss");

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, max-age=3600");

  res.end(`Current date and time: ${now}`);
});

server.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1/${port}`);
});
