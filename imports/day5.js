const fs = require("fs");

// DAY 1
let inputDay5 = [];
// read contents of the file
const data = fs.readFileSync("inputs/day5.txt", "UTF-8");
// split the contents by new line
inputDay5 = data.split(/\r?\n/);

module.exports = inputDay5;
