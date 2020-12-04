function day3a(arrayOfStrings) {
  let treesHit = 0;
  let position = 0;
  let stringLength = arrayOfStrings[0].length;

  arrayOfStrings.forEach((string) => {
    if (string[position] === "#") {
      treesHit++;
    }

    position += 3;

    if (position >= stringLength) {
      position -= stringLength;
    }
  });

  return treesHit;
}

function day3b(arrayOfStrings, arrayOfSlopes) {
  let treesHitPerSlopeArray = [];
  // each slope is a separate calculation
  arrayOfSlopes.forEach((slopeArr) => {
    const moveRight = slopeArr[0];
    const moveDown = slopeArr[1];
    let linesToSkip = 0;

    let treesHit = 0;
    let position = 0;
    let stringLength = arrayOfStrings[0].length;

    // for each line
    arrayOfStrings.forEach((string) => {
      // skip the line, if necessary
      if (linesToSkip > 0) {
        linesToSkip--;
      } else {
        // tally trees hit
        if (string[position] === "#") {
          treesHit++;
        }

        // move right the correct number of times
        position += moveRight;

        // reset if moved too far right
        if (position >= stringLength) {
          position -= stringLength;
        }

        // calculate how many lines to skip on next pass
        linesToSkip = moveDown - 1;
      }
    });

    treesHitPerSlopeArray.push(treesHit);
  });

  const answer = treesHitPerSlopeArray.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator * currentValue;
  });

  return `Trees hit multiplied: ${answer}.`;
}

const slopesFor3b = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

module.exports = {
  day3a,
  day3b,
  slopesFor3b,
};
