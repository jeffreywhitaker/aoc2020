const fs = require("fs");

// DAY 1
let input = [];
// read contents of the file
const data = fs.readFileSync("inputs/day6.txt", "UTF-8");
// split the contents by double new line
const _input = data.split(/\r?\n\r?\n/);

// split each group into individuals
_input.forEach((groupAsString) => {
  // get an array of each person in the group
  const indivArr = groupAsString.split(/\r?\n/);

  // add that array to the input array to return
  input.push(indivArr);
});

module.exports = input;
