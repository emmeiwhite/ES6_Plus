/* ---  var, let, const --- */

// 1. var: declare (define), update and even redefine a variable. And refining is a bad practice

var number = 100; // Define
// console.log(number);

number = 500; // Update

// console.log(number);

// Now the shocker
var number = "Hello World!";
// console.log(number);
// That redeclaring is solved with the help of let.

// 2. let: declare, update but not redefine it

let person = "Sam";
// console.log(person);

// let person = "tom"; This throws an error, saying that: Identifier "person" has always been declared. So we cannot redefine our variables with

// 3.const: Only declare (initialize also at the same time), We cannot even update later

const evenPrime = 2;
// evenPrime = 14; This gives an error: Assignment to constant variable.

/** --- Another Difference b/w let, var and const is scoping:
 *
 * 1. var is function scoped
 * 2. let and const are block scoped {} : Anything b/w the curly brackets
 */

var transactions = 34;
var isNewTransaction = true;

if (isNewTransaction) {
  var transactions = 35; // Setting up a new variable with same name within blocks but it has not a block scope, It is a global scope
}

// console.log(transactions);

//let's try with let and const which have block scopes

let cycles = 10;
var isNewTransaction = true;
// console.log(window.isNewTransaction);
// console.log(window.cycles);

if (isNewTransaction) {
  let cycles = 20; // Setting up a new variable with same name within blocks since the scope of block level, global variable cycles has no impact and it stays 10
}

// console.log(cycles);
// 10 from the above variable

/********* LET'S CHECK THE Hoisting ************/

// console.log(names); // var is hoisted and we get an undefined
var names = "immu, kimmu";
// console.log(names);

// console.log(isWorking); app.js:64 Uncaught ReferenceError: Cannot access 'isWorking' before initialization
let isWorking = "Hello People!";
console.log(isWorking);
