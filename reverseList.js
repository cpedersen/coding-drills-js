// How do you reverse a list/array without using the reverse method?

let array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];
let array2 = [5, 8, 2, 9, 5, 6, 3, 1];

// Pseudocode:
// 1. Take last element of array and add it to newArray
// 2. Loop through array from end to beginning
// 3. Print output of array

function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(reverseArray(array1));
console.log(reverseArray(array2));
