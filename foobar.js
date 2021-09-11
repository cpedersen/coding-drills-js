let array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];
let array2 = [5, 8, 2, 9, 5, 6, 3, 1];

function reverseArray(arr) {
  let newArray = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(reverseArray(array1));
console.log(reverseArray(array2));
