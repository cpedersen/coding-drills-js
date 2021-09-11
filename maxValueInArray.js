// naive solution

function maxNaive(array) {
  for (const itemA of array) {
    // Assume that it is the maximum value until we know otherwise
    let isMax = true;

    for (const itemB of array) {
      if (itemA < itemB) {
        /* There is a value greater than itemA, so it is not the
                   maximum */
        isMax = false;
      }
    }

    if (isMax) {
      return itemA;
    }
  }
}

console.log(maxNaive([77, 22, 11, 3, 999]));

// better solution

function maxBetter(array) {
  for (const itemA of array) {
    // Assume that it is the maximum value until we know otherwise
    let isMax = true;

    for (const itemB of array) {
      if (itemA < itemB) {
        /* There is a value greater than itemA, so it is not the
                   maximum */
        isMax = false;
        // Don't keep checking the value
        break;
      }
    }

    if (isMax) {
      return itemA;
    }
  }
}

console.log(maxBetter([77, 22, 11, 3, 999]));

// best solution
function maxBest(array) {
  if (array.length === 0) {
    return null;
  }

  let currentMax = array[0];
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    if (item > currentMax) {
      currentMax = item;
    }
  }
  return currentMax;
}

console.log(maxBest([77, 22, 11, 3, 999]));
