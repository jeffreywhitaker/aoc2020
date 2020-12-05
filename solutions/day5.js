function day5a(arrayOfStrings) {
  let highestSeatID = 0;

  // get the seat ID
  // for each string
  arrayOfStrings.forEach((string) => {
    let possibleRows = [];
    for (let i = 0; i <= 127; i++) {
      possibleRows.push(i);
    }

    let possibleColumns = [];
    for (let i = 0; i <= 7; i++) {
      possibleColumns.push(i);
    }

    // for each of the first 7 letters
    for (let i = 0; i < 7; i++) {
      if (string[i] === "F") {
        possibleRows = possibleRows.slice(0, possibleRows.length / 2);
      } else if (string[i] === "B") {
        possibleRows = possibleRows.slice(
          possibleRows.length / 2,
          possibleRows.length
        );
      }
    }

    for (let i = 7; i <= string.length; i++) {
      if (string[i] === "L") {
        possibleColumns = possibleColumns.slice(0, possibleColumns.length / 2);
      } else if (string[i] === "R") {
        possibleColumns = possibleColumns.slice(
          possibleColumns.length / 2,
          possibleColumns.length
        );
      }
    }

    const seatID = possibleRows[0] * 8 + possibleColumns[0];
    if (seatID > highestSeatID) highestSeatID = seatID;
  });

  return `Highest seat ID: ${highestSeatID}`;
}

function day5b(arrayOfStrings) {
  let arrOfSeatIDs = [];
  let lowestID = 20000;
  let highestID = 0;

  // get the seat ID
  // for each string
  arrayOfStrings.forEach((string) => {
    let possibleRows = [];

    for (let i = 0; i <= 127; i++) {
      possibleRows.push(i);
    }

    let possibleColumns = [];
    for (let i = 0; i <= 7; i++) {
      possibleColumns.push(i);
    }

    // for each of the first 7 letters
    for (let i = 0; i < 7; i++) {
      if (string[i] === "F") {
        possibleRows = possibleRows.slice(0, possibleRows.length / 2);
      } else if (string[i] === "B") {
        possibleRows = possibleRows.slice(
          possibleRows.length / 2,
          possibleRows.length
        );
      }
    }

    for (let i = 7; i <= string.length; i++) {
      if (string[i] === "L") {
        possibleColumns = possibleColumns.slice(0, possibleColumns.length / 2);
      } else if (string[i] === "R") {
        possibleColumns = possibleColumns.slice(
          possibleColumns.length / 2,
          possibleColumns.length
        );
      }
    }

    const seatID = possibleRows[0] * 8 + possibleColumns[0];
    if (seatID < lowestID) lowestID = seatID;
    if (seatID > highestID) highestID = seatID;
    arrOfSeatIDs.push(seatID);
  });

  arrOfSeatIDs = arrOfSeatIDs.sort((a, b) => {
    return a - b;
  });

  let mySeat;
  for (let i = lowestID; i < highestID; i++) {
    if (arrOfSeatIDs.indexOf(i) === -1) {
      mySeat = i;
    }
  }
  return `My seat is: ${mySeat}`;
}

module.exports = {
  day5a,
  day5b,
};
