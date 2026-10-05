const fs = require("fs");
const path = require("path");

const dirName = path.join(__dirname, "myFolder");

fs.mkdir(dirName, (err) => {
  if (err) {
    console.error("Error making new directory: ", err);
    return;
  }

  console.log("Directory was created!");
});

fs.rmdir();
