import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
