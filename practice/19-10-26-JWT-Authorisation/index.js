import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "./models/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;
const host = process.env.HOST || "127.1.1.0";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello node js!");
});

// Register new user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ username, password: hashedPassword });

    res.status(201);
    res.send("User registred successfully");
  } catch (err) {
    console.error(err);

    res.status(500);
    res.send("Failed to register new user");
  }
});

// Login user
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: { username: username },
    });

    if (!user) {
      return res.status(400).send("Username or password is invalid");
    }

    const isPassworValid = await bcrypt.compare(password, user.password);

    if (!isPassworValid) {
      return res.status(400).send("Username or password is invalid");
    }

    res.status(201).send("Login successfull");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://${host}t:${port}`);
});
