const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;
const apiKey = process.env.API_KEY;

console.log(port, apiKey);

// const moment = require("moment");

// const now = moment().format("YYYY-MM-DD HH:mm:ss");

// console.log(now);

// console.log(now, "another log");

// const _ = require("lodash");

// const numbers = [1, 2, 3, 4, 5, 6];

// const newArray = _.shuffle(numbers);

// console.log(numbers, newArray);
