const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "secret-folder");

fs.readdir(dirPath, { withFileTypes: true }, (error, data) => {
  if (error) throw error;
  data.forEach((file) => {
    if (file.isFile()) {
      let filePath = path.join(dirPath, file.name);
      let typeLength = file.name.length - path.extname(filePath).length;
      let type = path.extname(filePath);
      let str = `${file.name.substring(0, typeLength)} - ${type} - `;

      fs.stat(path.join(dirPath, file.name), (error, stats) => {
        if (error) throw error;
        else {
          size = (stats.size / 1024).toFixed(2) + "kb";
          console.log(str + size);
        }
      });
    }
  });
});