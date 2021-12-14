const equaliseStacks = (h1, h2, h3) => {
  const stacks = [h1, h2, h3];
  let j,
    i,
    value,
    max = 0,
    sum,
    map = {};
  let values = [];
  for (i = 0; i < stacks.length; i++) {
    console.log("\n\nStack ", i);
    values = stacks[i];
    sum = 0;
    for (j = values.length - 1; j > -1; j--) {
      value = +values[j];
      sum += value;
      if (!map[sum]) {
        map[sum] = 1;
      } else {
        map[sum] = map[sum] + 1;
      }
      if (map[sum] === stacks.length && sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

let stacks = [
  [1, 1],
  [1, 1, 2],
  [1, 2, 1, 1],
];

const stacksRes = equaliseStacks(...stacks);
console.log("Height needed to equalize all stacks: ", stacksRes);
