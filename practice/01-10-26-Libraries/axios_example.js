const axios = require("axios");

const request = axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.error("There was a problem fetching a todo: ", err);
  });
