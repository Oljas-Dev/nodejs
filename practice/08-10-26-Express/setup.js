import connection from "./db.js";

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  )
`;

connection.query(createUsersTable, (err, results) => {
  if (err) {
    console.error("Error creating users table:", err.stack);
    return;
  }
  console.log("Users table created successfully");
  //   connection.end(); // Закрываем соединение после выполнения запроса
});
