function day1a(nums) {
  nums.sort();
  let lowStart = 0;
  let highStart = nums.length - 1;
  let sum = nums[highStart] + nums[lowStart];

  while (sum !== 2020) {
    if (sum > 2020) {
      highStart--;
      sum = nums[highStart] + nums[lowStart];
    }

    if (sum < 2020) {
      lowStart++;
      sum = nums[highStart] + nums[lowStart];
    }
  }

  return `${nums[lowStart]} + ${nums[highStart]} = ${sum}, and multiply to: ${
    nums[highStart] * nums[lowStart]
  }`;
}

function day1b(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      for (let k = 2; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 2020) {
          return `${nums[i]} + ${nums[j]} + ${
            nums[k]
          } = ${sum}, and multiply to: ${nums[i] * nums[j] * nums[k]}`;
        }
      }
    }
  }
}

module.exports = {
  day1a,
  day1b,
};
