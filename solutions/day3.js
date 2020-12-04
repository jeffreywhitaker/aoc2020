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

module.exports = {
  day3a,
};
