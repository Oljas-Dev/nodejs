import dotenv from "dotenv";
import http from "http";

dotenv.config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const method = req.method;
  const path = req.url;

  if (method === "GET") {
    if (path === "/") {
      res.end("Welcome to the homepage!");
    } else if (path === "/about") {
      res.end("This is the about page!");
    } else if (path === "/contact") {
      res.end("This is the contact page!");
    } else {
      res.statusCode = 404;
      res.end("Page not found");
    }
  } else if (method === "POST") {
    res.statusCode = 201;
    if (path === "/submit") {
      res.end("Form submitted");
    } else {
      res.statusCode = 404;
      res.end("Page not found");
    }
  } else {
    res.statusCode = 405;
    res.end("Method is not allowed");
  }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

// import dotenv from "dotenv";
// import http from "http";

// dotenv.config();

// const port = process.env.PORT || 3000;

// const server = http.createServer((request, response) => {
//   response.end("Hello");
// });

// server.listen(port, () => {
//   console.log(`Server is running at http://127.0.0.1:${port}/`);
// });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   if (req.url === "/") {
//     res.end("Main page");
//   } else if (req.url === "/about") {
//     res.end("About us");
//   } else if (req.url === "/contact") {
//     res.end("Contacts");
//   } else {
//     res.statusCode = 404;
//     res.end("not found");
//   }
// });
// const port = 3333;
// server.listen(port, () => {
//   console.log(`Server running at http://127.0.0.1:${port}/`);
// });
