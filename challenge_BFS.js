"use strict";

const fs = require("fs");

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
}

/*
 * Complete the 'numPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY warehouse as parameter.
 */

function numPaths(warehouse) {
  /*
    warehouse = [[1, 1, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1]]

    1, 1, 1, 1
    1, 1, 0, 1
    1, 1, 1, 1
    
    How many possible paths to get to bottom right?
    Can only increase in row or column?
    
    Possible moves (2):
    - Right
    - Down
        
        Outside loop - loop through all arrays
        let hopCount = 0;
        let arrHops = [];
        let arrNext = curArr + 1;
        
        Inside loop 1 - loop through each item in the array (Right):
            If 0 found, then break from this loop
            
            
            Inside loop 2 - 
                1 found, push [r, c] to new array
                    incr hopCount
            
    push hopCount (length path) to an arrayPaths  
    Return arrayPaths.length

    */
  return numPathsFromPoint(warehouse, 0, 0);
}

function numPathsFromPoint(warehouse, r, c) {
  let lastArray = warehouse[warehouse.length - 1];
  let rDest = warehouse.length - 1;
  let cDest = lastArray.length - 1;
  let arrCurr = warehouse[r];
  let curr = arrCurr[c]; // If current point [r, c] is 0, then return

  if (warehouse[r][c] === 0) {
    return 0;
  } // End point
  if (r === rDest && c === cDest) {
    // Base case
    return 1;
  } // 0, 1
  const numPathsFromRight = numPathsFromPoint(warehouse, r, c + 1);
  const numPathsFromBelow = numPathsFromPoint(warehouse, r + 1, c);
  return numPathsFromRight + numPathsFromBelow;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const warehouseRows = parseInt(readLine().trim(), 10);

  const warehouseColumns = parseInt(readLine().trim(), 10);

  let warehouse = Array(warehouseRows);

  for (let i = 0; i < warehouseRows; i++) {
    warehouse[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((warehouseTemp) => parseInt(warehouseTemp, 10));
  }

  const result = numPaths(warehouse);

  ws.write(result + "\n");

  ws.end();
}
