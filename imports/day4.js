const fs = require("fs");
const inputDay3 = require("./day3");

// DAY 4

// read contents of the file
const data = fs.readFileSync("inputs/day4.txt", "UTF-8");
// split the contents by double new line
const inputDay4a = data.split(/\r?\n\r?\n/);

// iterate through each passport-as-string, remove the line breaks, and push into new array
let _inputDay4b = [];
inputDay4a.forEach((passportString) => {
  const arrayToPush = passportString
    .replace(/\n\r/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/g);

  _inputDay4b.push(arrayToPush);
});

let inputDay4b = [];

// iterate through each array inside the main array
_inputDay4b.forEach((passportArray) => {
  let passportObj = {};

  // for each string in each of the passport arrays
  passportArray.forEach((string) => {
    // if the string has no spaces
    if (string.indexOf(" ") === -1) {
      // split it on the :
      let _keyValArr = string.split(":");
      passportObj[_keyValArr[0]] = _keyValArr[1];
    } else {
      // if the string has spaces
      let _arrOfKeyValStrings = string.split(" ");

      // iterate through the array of 'key:val'
      _arrOfKeyValStrings.forEach((string) => {
        // split it on the :
        let _keyValArr = string.split(":");
        passportObj[_keyValArr[0]] = _keyValArr[1];
      });
    }
  });

  // add the new objects to the array
  inputDay4b.push(passportObj);
});

// let day4bInput = day4bInput;

// // split on space for each passportString
// day4aInput.forEach((passportString) => {
//   // create an object to house each field for each individual passport
//   let objToReturn = {};

//   // create an array of strings, formatted as 'key:value'
//   const arrOfKeyVals = passportString.split(" ");

//   const toAdd = [];
//   // take care of \r\n in the strings
//   arrOfKeyVals.forEach((string, index) => {
//     if (string.includes("\r\n")) {
//       // get the problem string but don't remove yet
//       const problemString = string;

//       // split where necessary
//       const arrOfNewParts = problemString[0].split("\r\n");

//       // put them into the original array correctly
//       arrOfNewParts.forEach((part) => {
//         toAdd.push(part);
//       });

//       // remove the problem string
//       arrOfKeyVals.splice(index, 1);
//     }
//   });
//   arrOfKeyVals.concat(toAdd);
//   console.log("oidfnsodf, ", arrOfKeyVals);
//   return;

//   // for each of these strings
//   arrOfKeyVals.forEach((pair) => {
//     // splice on the ':' and save the key and value to the return Obj
//     const pairArr = pair.split(":");
//     objToReturn[pairArr[0]] = pairArr[1];
//   });

//   day4bInput.push(objToReturn);
// });

// console.log("input: ", day4bInput);

module.exports = {
  inputDay4a,
  inputDay4b,
};
