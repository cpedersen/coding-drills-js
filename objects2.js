let greeting = {
  fullname: "Snoopy",
  getFullName: () => {
    return this.fullname;
  },
  greet: (message, name) => {
    console.log(`${message} ${name}!`);
  },
};

greeting.greet("Greetings", greeting.fullname);
