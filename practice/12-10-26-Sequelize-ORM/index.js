import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import { User, Post, Category, Product } from "./models/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Sequelize with Express");
});

app.get("/category/fruits", async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { id: 2 },
      include: {
        model: Product,
        as: "products",
      },
    });

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

// Create new user
app.post("/register", async (req, res) => {
  const { name, email } = req.body;

  try {
    await User.create({ name, email });

    res.status(201).json({
      success: true,
      message: "User successfully registered!",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
});

// Create new category
app.post("/new-category", async (req, res) => {
  const { name } = req.body;
  try {
    await Category.create({ name });

    res.status(201).json({
      success: true,
      message: "Category was created successfully",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to create new category",
    });
  }
});

// Create product
app.post("/new-product", async (req, res) => {
  const { name, price, description, categoryName } = req.body;

  await Product.create({ name, price, description, categoryName });
  res.status(201).json({
    success: true,
    message: `${name} was added as a ${categoryName}`,
  });

  try {
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to add product",
    });
  }
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

// fetch("http://localhost:3333/new-category", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "apple",
//       price: 2,
//       description: "Apples from Germany",
//       categoryName: "fruits",
//   }),
// })
