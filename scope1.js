// Without running the code, predict output for the following:

function two() {
  let a;
  console.log(a);
}
function one() {
  let a = 2;
  console.log(a);
  two();
}
let a = 1;
console.log(a);
one();
