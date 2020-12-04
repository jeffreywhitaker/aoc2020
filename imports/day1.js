const fs = require("fs");

// DAY 1
let inputDay1 = [];
// read contents of the file
const data = fs.readFileSync("inputs/day1.txt", "UTF-8");
// split the contents by new line
const lines = data.split(/\r?\n/);
// for all lines
lines.forEach((line) => {
  // trim the line, parse to into, push into array
  inputDay1.push(parseInt(line.trim()));
});

module.exports = inputDay1;
