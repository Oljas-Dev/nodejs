import dotenv from "dotenv";
import express from "express";
import connection from "./db.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Маршрут для получения всех пользователей
app.get("/users", (req, res) => {
  const query = `SELECT * FROM users`;
  connection.query(query, (err, results) => {
    if (err) {
      console.error("errro fetching users:", err.stack);
      res.status(500).send("error fetching users");
      return;
    }
    res.json(results);
  });
});

// Маршрут для добавления нового пользователя
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  connection.query(query, [name, email], (err, results) => {
    if (err) {
      console.error("Error adding user:", err.stack);
      res.status(500).send("Error adding user");
      return;
    }
    res.status(201).send("User added successfully");
  });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// import express from "express";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/users/:id", (req, res, next) => {
//   const userId = Number(req.params.id);
//   const adminId = 1;

//   if (userId !== adminId) {
//     const error = new Error("User not found");
//     error.status = 404;
//     return next(error);
//   }

//   res.send(`User found: ${userId}`);

//   const userId = req.params.id;

//   try {
//     if (userId === undefined) {
//       const error = new Error("User not found");
//       throw error;
//     }

//     res.status(200);
//     res.send("user found: ", userId);
//   } catch (error) {
//     console.error(error);
//     res.status(404);
//     res.send("user not found");
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);

//   res.status(err.status || 500).json({ message: err.message });
// });

// app.get("/", (req, res) => {
//   res.send("Hello Alice");
// });

// app.get("/products", (req, res) => {
//   res.send("List of products");
// });

// app.get("/products/:id", (req, res) => {
//   const productId = req.params.id;

//   res.send(`Current product id: ${productId}`);
// });

// app.get("/search", (req, res) => {
//   const query = req.query.word;

//   res.send(`Search query: ${query}`);
// });

// app.get("/search", (req, res) => {
//   const query = req.query;

//   console.log(query);

//   res.send(`Search query`);
// });

// app.post("/users", (req, res) => {
//   const username = req.body.username;
//   const email = req.body.email;
//   const password = req.body.password;

//   console.log(username, email, password);

//   res.send("User successfully registered");
// });

app.listen(port, () => {
  console.log(`"Server is running at http://localhost:${port}`);
});
