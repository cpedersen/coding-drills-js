"use strict";
/*const fs = require("fs");
process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString = "";
let currentLine = 0;
process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});
process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});
function readLine() {
  return inputString[currentLine++];
}*/
/*
 * Complete the 'compressedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING message as parameter.
 */
function compressedString(message) {
  const arrChars = message.split("");
  let returnArr = [];
  let counter = 1;
  for (let i = 0; i < arrChars.length; i++) {
    let currChar = arrChars[i];
    let nextChar = arrChars[i + 1];
    if (currChar !== nextChar) {
      // If there isn't a match, then push the char and reset
      // the counter
      returnArr.push(arrChars[i]);
      if (counter > 1) {
        returnArr.push(counter);
      }
      counter = 1;
    } else {
      // There's a match; increment counter
      counter++;
    }
  }
  return returnArr.join("");
}

const result = compressedString("abaasass");
console.log(result);
console.log(compressedString("abaasasssaa"));
/*function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const message = readLine();
  const result = compressedString(message);
  ws.write(result + "\n");
  ws.end();
}*/

// count 1
let user = {
    name: 'Catherine'
}

// count 
user = undefined



// count 0

info = {
    name: 'Charles',
    age: "20",
    city: undefined
}