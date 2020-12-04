function day2a(arrayOfObjs) {
  let validPassCount = 0;

  arrayOfObjs.forEach((passwordObj) => {
    const { lower, upper, letter, string } = passwordObj;
    let numOfLetter = 0;

    for (i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        numOfLetter++;
      }
    }

    if (numOfLetter >= lower && numOfLetter <= upper) {
      validPassCount++;
    }
  });

  return `There are ${validPassCount} valid passwords.`;
}

function day2b(arrayOfObjs) {
  let validPassCount = 0;

  arrayOfObjs.forEach((passwordObj) => {
    const { lower, upper, letter, string } = passwordObj;
    let occurancesOfLetter = 0;

    if (string[lower - 1] === letter) {
      occurancesOfLetter++;
    }

    if (string[upper - 1] === letter) {
      occurancesOfLetter++;
    }

    if (occurancesOfLetter === 1) {
      validPassCount++;
    }
  });

  return `There are ${validPassCount} valid passwords.`;
}

module.exports = {
  day2a,
  day2b,
};
