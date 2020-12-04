function day4a(arrayOfPassportStrings) {
  let countValid = 0;

  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  // for each passport
  arrayOfPassportStrings.forEach((passportString) => {
    let isValid = true;

    // loop through required fields
    requiredFields.forEach((reqField) => {
      // if the field is not included
      if (!passportString.includes(reqField)) {
        isValid = false;
        return;
      }
    });

    if (isValid) countValid++;
  });

  return `Valid passports is ${countValid}.`;
}

module.exports = {
  day4a,
};
