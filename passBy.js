// Pass by value
let message = "Hello world";

function logMessage(msg) {
  console.log(msg);
  msg = "Hi!";
  /*
        Passed by value, the original string is not affected
        
        msg = 'Hi!'
        message = 'Hello world'
    */
}

logMessage(message);

// Pass by reference
let messages = ["hello world", "how are you?"];

function logMessages(msgs) {
  msgs.forEach((message) => {
    console.log(message);
  });
  msgs.push("Hi!");
  /*
        Passed by reference, the passed array is affected as well
        
        msgs = ['hello world', 'how are you?', 'Hi!']
        messages = ['hello world', 'how are you?', 'Hi!']
    */
}

logMessages(messages);
