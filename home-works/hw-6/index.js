import express from "express";

const app = express();
const port = 3333;

app.listen(port, () => {
  console.log("Express server is running on http://localhost:3333");
});
