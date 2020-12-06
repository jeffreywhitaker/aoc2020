function day6a(arrOfGroupArrays) {
  let totalAcrossAllGroups = 0;

  // count number of questions for each group
  arrOfGroupArrays.forEach((group) => {
    // make an object to count occurances of each letter
    let countOfYesPerQuestion = {};

    // for each individual in the group
    group.forEach((personString) => {
      // iterate through their string
      for (let i = 0; i < personString.length; i++) {
        // if the letter is not in the obj, make it
        if (!countOfYesPerQuestion[personString[i]]) {
          countOfYesPerQuestion[personString[i]] = 1;
        } else {
          // if the object is in the obj, increment it
          countOfYesPerQuestion[personString[i]]++;
        }
      }
    });

    totalAcrossAllGroups += Object.keys(countOfYesPerQuestion).length;
  });

  // return the sum of this number across all groups
  return `The number across all groups is: ${totalAcrossAllGroups}`;
}

function day6b(arrOfGroupArrays) {
  let totalAcrossAllGroups = 0;

  // count number of questions for each group
  arrOfGroupArrays.forEach((group) => {
    // make an object to count occurances of each letter
    let countOfYesPerQuestion = {};

    // for each individual in the group
    group.forEach((personString) => {
      // iterate through their string
      for (let i = 0; i < personString.length; i++) {
        // if the letter is not in the obj, make it
        if (!countOfYesPerQuestion[personString[i]]) {
          countOfYesPerQuestion[personString[i]] = 1;
        } else {
          // if the object is in the obj, increment it
          countOfYesPerQuestion[personString[i]]++;
        }
      }
    });

    // get the total number of people in each group
    const groupNum = group.length;

    // increment by 1, for each entry in the object with val === groupNum
    let allYesCount = 0;
    for (const key in countOfYesPerQuestion) {
      if (countOfYesPerQuestion[key] === groupNum) {
        allYesCount++;
      }
    }

    totalAcrossAllGroups += allYesCount;
  });

  // return the sum of this number across all groups
  return `The number across all groups is: ${totalAcrossAllGroups}`;
}

module.exports = {
  day6a,
  day6b,
};
