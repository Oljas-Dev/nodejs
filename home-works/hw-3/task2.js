const fs = require("fs");

const newTextFile = "info.txt";
const text = "Node.js is awesome!";

fs.writeFile(newTextFile, text, (err) => {
  if (err) {
    console.error("Error creating new file: ", err);
    return;
  }

  console.log(`${newTextFile} was succefully created!`);

  fs.readFile(newTextFile, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file: ", err);
      return;
    }

    console.log(data);
  });
});
