const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const fileName = process.env.FILENAME;

fs.writeFile(
  fileName,
  "The name of the file was taken from .env file",
  (err) => {
    if (err) {
      console.error("Error creating new file: ", err);
      return;
    }

    console.log("New file was created!");

    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        console.error(`Error reading file ${fileName}: `, err);
        return;
      }

      console.log("File was read!");
      console.log(data);
    });
  },
);
