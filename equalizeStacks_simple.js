const equalizeStacks = (h1, h2, h3) => {
  const stacks = [h1, h2, h3];

  let sum_h1 = h1.reduce((a, b) => a + b, 0);
  let sum_h2 = h2.reduce((a, b) => a + b, 0);
  let sum_h3 = h3.reduce((a, b) => a + b, 0);

  console.log("sum_h1: ", sum_h1);
  console.log("sum_h2: ", sum_h2);
  console.log("sum_h3: ", sum_h3);

  // Look for all stacks to be the same height
  while (!(sum_h1 === sum_h2 && sum_h2 === sum_h3)) {
    // Is h1 more than the others?
    if (sum_h1 > sum_h2 || sum_h1 > sum_h3) {
      t = h1.pop();
      sum_h1 = sum_h1 - t;
      console.log("sum_h1: ", sum_h1);
    }
    // Is h2 more than the others?
    if (sum_h2 > sum_h1 || sum_h2 > sum_h3) {
      t = h2.pop();
      sum_h2 = sum_h2 - t;
      console.log("sum_h2: ", sum_h2);
    }
    // Is h3 more than the others?
    if (sum_h3 > sum_h1 || sum_h3 > sum_h2) {
      t = h3.pop();
      sum_h3 = sum_h3 - t;
      console.log("sum_h3: ", sum_h3);
    }
  }
  return sum_h1;
};

let stacks = [
  [1, 1],
  [1, 1, 2],
  [1, 2, 1, 1],
];

let h1 = [1, 2, 1, 1];
let h2 = [1, 1, 2];
let h3 = [1, 1];

const stacksRes = equalizeStacks(h1, h2, h3);
console.log("Height needed to equalize all stacks: ", stacksRes);
