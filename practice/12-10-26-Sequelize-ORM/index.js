import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, Sequielize with Express");
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully");
    console.log(`Server is running on http://localhost:${port}`);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
});
