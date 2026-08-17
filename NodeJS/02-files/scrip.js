const fs = require("fs");

// console.log(fs);

console.log("Starting");
fs.writeFile("kenil.txt", "Kenil is good boy", () => {
  console.log("done");
  fs.readFile("kenil.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("kenil.txt", "kenil Pansara", (e, d) => {
  console.log(d);
});

console.log("ending");
 