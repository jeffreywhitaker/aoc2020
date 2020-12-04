const { day1a, day1b } = require("./solutions/day1");
const { day2a, day2b } = require("./solutions/day2");
const { day3a, day3b, slopesFor3b } = require("./solutions/day3");
const { day4a } = require("./solutions/day4");

const inputDay1 = require("./imports/day1");
const inputDay2 = require("./imports/day2");
const inputDay3 = require("./imports/day3");
const inputDay4 = require("./imports/day4");

console.log("\n Day 1:");
console.log(day1a(inputDay1));
console.log(day1b(inputDay1));

console.log("\n Day 2:");
console.log(day2a(inputDay2));
console.log(day2b(inputDay2));

console.log("\n Day 3:");
console.log(`Trees hit: ${day3a(inputDay3)}`);
console.log(day3b(inputDay3, slopesFor3b));

console.log("\n Day 4:");
console.log(day4a(inputDay4));

console.log("\n");
