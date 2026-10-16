import User from "./user.js";
import Post from "./post.js";
import Category from "./category.js";
import Product from "./product.js";

// // One to one
// User.hasOne(Post, { foreignKey: "userId", as: "post" });
// Post.belongsTo(User, { foreignKey: "userId", as: "user" });

// One to many
User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "user" });

Category.hasMany(Product, {
  foreignKey: "categoryName",
  sourceKey: "name",
  as: "products",
});

Product.belongsTo(Category, {
  foreignKey: "categoryName",
  targetKey: "name",
  as: "category",
});

// Many to many
// User.belongsToMany(Post, {
//   through: "UserPosts",
//   as: "posts",
//   foreignKey: "userId",
// });
// Post.belongsToMany(User, {
//   through: "UserPosts",
//   as: "posts",
//   foreignKey: "postId",
// });

export { User, Post, Category, Product };
