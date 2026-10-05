// Создайте новый проект (если его еще нет):
// В терминале перейдите в каталог, где хотите создать проект.
// Выполните команду `npm init -y`, чтобы инициализировать новый проект с файлом `package.json`.

// Установите nodemailer:
// Выполните команду `npm install nodemailer`, чтобы установить библиотеку `nodemailer`.

// Создайте файл для отправки письма:
// В корневом каталоге проекта создайте файл `nodemailer-example.js`.

// Настройте nodemailer для отправки письма:
// Откройте файл `nodemailer-example.js` в текстовом редакторе.

// Импортируйте модуль `nodemailer`.

const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const email = process.env.EMAIL;

// Настройте транспортер для использования вашего почтового сервиса (например, Gmail).
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Укажите параметры письма (отправитель, получатель, тема, текст письма).
async function sendEmail() {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Message from Node.js",
      text: "Hi, this is your first email from Node.js",
    });

    console.log("Message sent", info.messageId);
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
}

sendEmail();

// console.log("EMAIL_USER:", process.env.EMAIL);
// console.log("PASSWORD EXISTS:", !!process.env.EMAIL_PASSWORD);
// console.log("PASSWORD LENGTH:", process.env.EMAIL_PASSWORD?.length);
