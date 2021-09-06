function welcome(name) {
  let greeting = function (msg) {
    console.log(msg, name);
  };
  return greeting;
}

let myFunction = welcome("Cathy");
myFunction("Welcome");
myFunction("Hello Mr.");
