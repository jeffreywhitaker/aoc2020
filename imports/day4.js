const fs = require("fs");

// DAY 4

// read contents of the file
const data = fs.readFileSync("inputs/day4.txt", "UTF-8");
// split the contents by double new line
const passportStrings = data.split(/\r?\n\r?\n/);

module.exports = passportStrings;
