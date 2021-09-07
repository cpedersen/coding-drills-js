/* 
Note that in JavaScript almost everything is an object. Objects are mutable. They are addressed by reference, not by value. 

If person is an object, the following statement will not create a copy of person: 
const x = person; 
The object x is not a copy of person. It is person. Both x and person are the same object. Any changes to x will also change person, because x and person are the same object.

const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

const x = person;
x.age = 10;      // Will change both x.age and person.age


Booleans can be objects (if defined with the 
new keyword); however, booleans should be created as primitives, not objects. 
Numbers can be objects (if defined with the 
new keyword)
Strings can be objects (if defined with the 
new keyword)
Dates are always objects
Maths are always objects (Math is a global obj; the new keyword cannot be used on math)
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

Object values are written as name : value pairs (name and value separated by a colon). It is a common practice to declare objects with the const keyword. The named values (firstName, lastName, age, eyeColor) are called properties.
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue”};

There are 4 different ways to create new objects:
1. Create a single object, using an object literal. This is the easiest way. You both define and create an object in one statement. It’s a list of name:value pairs inside curly braces.
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue”};

2. Create a single object, with the keyword new.
const person = new Object();

3. Define an object constructor, and then create objects of the constructed type. An object constructor function provides a “blueprint” for creating many objects of the same type. 
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe”, 80, "blue");
const myMother = new Person("Sally", "Rally”, 78, "green”);

To add a new property to a constructor:
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
This way object properties can have default values.

Add a method:
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
}

4. Create an object using Object.create()

How do you add property/value pairs to an empty object:
const person = {};
person.firstName = “John”;
person.lastName = “Doe”;
person.age = 50;
person.eyeColor = “blue”;


JavaScript has built-in constructors for native objects:
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object

*/
