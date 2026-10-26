import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
