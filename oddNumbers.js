// Find odd numbers between 2 numbers (inlude the 2 numbers)

const { mainModule } = require("process");

function oddNumbers(l, r) {
  let oddArr = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
    }
  }
  return oddArr;
}

console.log(oddNumbers(3, 21));
