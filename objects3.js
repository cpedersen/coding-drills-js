let test = {
  band: "abba",
  members: "anna, frida, benny, bjorn",
  country: "Sweden",
};

let arr1 = Object.keys(test);
let arr2 = Object.values(test);
let arr3 = Object.entries(test);

arr1.forEach((key, index, array) => console.log(`${key} ${index} ${array}`));
