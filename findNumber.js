// Find number in array

function findNum(arr, k) {
  return arr.includes(k) ? "YES" : "NO";
}

console.log(findNum([0, 1, 2, 3, 4, 5], 8));
