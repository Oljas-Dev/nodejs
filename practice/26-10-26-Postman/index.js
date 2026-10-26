import express from "express";

// Создаем приложение Express
const app = express();

// Используем middleware для обработки JSON в теле запроса
app.use(express.json());

// Простой массив для хранения данных (вместо базы данных)
let items = [
  { id: 1, name: "Item One", description: "This is item one" },
  { id: 2, name: "Item Two", description: "This is item two" },
];

// Маршрут для получения всех предметов (GET /items)
app.get("/items", (req, res) => {
  res.json(items);
});

// Маршрут для получения конкретного предмета по ID (GET /items/:id)
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// Маршрут для создания нового предмета (POST /items)
app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Маршрут для обновления предмета (PUT /items/:id)
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  item.name = req.body.name || item.name;
  item.description = req.body.description || item.description;
  res.json(item);
});

// Маршрут для удаления предмета (DELETE /items/:id)
app.delete("/items/:id", (req, res) => {
  items = items.filter((i) => i.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Запуск сервера на порту 3333
app.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});

// Задание: тестирование и документация API
//     1. Запустите API:
//     • Откройте терминал на вашем компьютере.
//     • Перейдите в директорию, где находится ваш файл с API-кодом (например, `index.js`).
//     • Запустите сервер с помощью команды: node index.js
//     • Убедитесь, что сервер запущен и слушает на порту 3000.
//     2. Протестируйте все маршруты с помощью Postman:
//     • Откройте Postman на вашем компьютере.
//     • Создайте новый запрос и настройте его для каждого из маршрутов API:
//         ◦ GET /items: Этот запрос вернет список всех предметов.
//         ◦ GET /items/:id: Этот запрос вернет конкретный предмет по его ID (например, `/items/1`).
//         ◦ POST /items: Этот запрос добавляет новый предмет. В теле запроса необходимо передать JSON с полями `name` и `description`.
//         ◦ PUT /items/:id: Этот запрос обновляет существующий предмет по его ID. В теле запроса можно передать обновленные данные `name` и/или `description`.
//         ◦ DELETE /items/:id: Этот запрос удаляет предмет по его ID.
//     3. Создайте коллекцию и добавьте в неё все запросы:
//     • На панели слева в Postman выберите "Collections".
//     • Нажмите на "New Collection" и дайте коллекции название (например, "Items API").
//         ◦ Перетащите каждый из созданных запросов в эту коллекцию:
//         ◦ Откройте запрос.
//         ◦ Нажмите на значок "Save" и выберите вашу коллекцию для сохранения.
//     4. Добавьте комментарий к каждому запросу:
//     • Откройте каждый запрос в вашей коллекции.
//     • Перейдите на вкладку "Documentation" в правой части экрана.
//     • Добавьте описание к каждому запросу:
//         ◦ Например, для `GET /items`: "Этот запрос возвращает список всех предметов в базе данных."
//     • Сохраните описание, нажав на "Save" в правом верхнем углу.
//     5. Сгенерируйте документацию к API:
//     • В интерфейсе Postman выберите вашу коллекцию (например, "Items API").
//     • Нажмите на три точки рядом с названием коллекции и выберите "View Documentation".
//     • В появившемся окне просмотрите сгенерированную документацию.
//     • Для публикации или экспорта документации:
//         ◦ Нажмите на кнопку "Publish" для публикации на платформе Postman.
//         ◦ Или нажмите на три точки рядом с названием коллекции и выберите "Export", чтобы сохранить документацию в формате JSON на вашем компьютере.
