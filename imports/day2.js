const fs = require("fs");

// DAY 2
let inputDay2 = [];
// read contents of the file
const data = fs.readFileSync("inputs/day2.txt", "UTF-8");
// split the contents by new line
const lines = data.split(/\r?\n/);
// for all lines
lines.forEach((line) => {
  // split the line
  let _temp = line.split(":");
  const firstHalf = _temp[0].trim(); // lower, upper, letter
  const string = _temp[1].trim(); // string

  // split the lower, upper, letter
  _temp = firstHalf.split(" ");
  const lowerAndUpper = _temp[0];
  const letter = _temp[1];

  // split the lower and upper bounds
  _temp = lowerAndUpper.split("-");
  const lower = _temp[0].trim();
  const upper = _temp[1].trim();

  // create an array with all parts
  const lineObj = {
    lower,
    upper,
    letter,
    string,
  };

  // add to main array
  inputDay2.push(lineObj);
});

module.exports = inputDay2;
