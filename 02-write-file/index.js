const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;

fs.writeFile(path.join(__dirname, "text.txt"), "", (error) => {
  if (error) throw error;
});

stdout.write(
  "Hello.\ntext.txt file was created.\nWrite something to add to the file\nWrite 'stop' to end writing to file\n"
);

stdin.on("data", (message) => {
  if (message.toString().trim() == "exit") {
    console.log("Writing to file has been completed");
    process.exit();
  } else
    fs.appendFile(path.join(__dirname, "text.txt"), message, (error) => {
      if (error) throw error;
    });
});