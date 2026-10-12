import http from "http";
import fs from "fs";

// Задание 2

const server = http.createServer((req, res) => {
  try {
    // Intentional error
    throw new Error("Something went wrong on server");
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");

    fs.appendFile("errors.log", `${err.message}\n`, (appendErr) => {
      if (appendErr) {
        console.error("Error writing log: ", appendErr);
      }

      console.log("The error was logged in file");
    });

    res.end("Internal server error");
    console.error(err);
  }
});

server.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
