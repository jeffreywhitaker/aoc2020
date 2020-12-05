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

function day4b(arrayOfPassportObjs) {
  let countValid = 0;
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  // for each passport
  for (let i = 0; i < arrayOfPassportObjs.length; i++) {
    let passport = arrayOfPassportObjs[i];

    // validate each val
    if (!passport.byr) {
      continue;
    } else {
      const val = parseInt(passport.byr);

      if (val < 1920 || val > 2002) {
        continue;
      }
      // console.log("valid byr: ", passport.byr);
    }

    if (!passport.iyr) {
      continue;
    } else {
      const val = parseInt(passport.iyr);

      if (val < 2010 || val > 2020) {
        continue;
      }
      // console.log("valid iyr: ", passport.iyr);
    }

    if (!passport.eyr) {
      continue;
    } else {
      const val = parseInt(passport.eyr);

      if (val < 2020 || val > 2030) {
        continue;
      }
      // console.log("valid eyr: ", passport.eyr);
    }

    if (!passport.hgt) {
      continue;
    } else {
      const val = parseInt(passport.hgt.substring(0, passport.hgt.length - 2));
      const measure = passport.hgt.substring(passport.hgt.length - 2);

      if (measure === "in") {
        if (val < 59 || val > 76) {
          continue;
        }
      } else if (measure === "cm") {
        if (val < 150 || val > 193) {
          continue;
        }
      } else {
        continue;
      }
      // console.log("valid hgt: ", passport.hgt);
    }

    if (!passport.hcl) {
      continue;
    } else {
      // regex for # followed by six digits 0-9 or a-f
      const firstChar = passport.hcl[0];
      const digits = passport.hcl.substring(1);

      if (firstChar !== "#") continue;
      if (!digits.match(/^[a-f|0-9]{6}$/)) {
        continue;
      }
      // console.log("valid hcl: ", passport.hcl);
    }

    if (!passport.ecl) {
      continue;
    } else {
      const allowed = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

      if (!allowed.includes(passport.ecl)) {
        continue;
      }
      // console.log("valid ecl: ", passport.ecl);
    }

    if (!passport.pid) {
      continue;
    } else {
      // regex for a string of 9 digits, including leading 0s
      if (!passport.pid.match(/^[0-9]{9}$/)) {
        // console.log(passport.pid, "pid did not match");
        continue;
      }
      // console.log("valid pid: ", passport.pid);
    }

    countValid++;
  }
  return `There are ${countValid} valid passwords.`;
}

module.exports = {
  day4a,
  day4b,
};
