/* 
 * JavaScript –
 * Multiline comment
 */

// JavaScript single line comment


/* 
 * Variables
 * Advanced: Newer notation prefer let and const instead of var!
 */

var age = 1023;

/* 
 * Functions
 * (They can be declared in a lot of different ways:
 * https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/)
 */

function doubleAmount(number) {
  return number * 2;
}

/* 
 * Console:
 * Logging everything!
 */

console.log('age: ', age); // Logging the value of the variable
console.log('doubleAmount: ', doubleAmount); // Logging the function (without executing it)
console.log('Result: ', doubleAmount(age)); // Logging the result by executing the function and passing the parameter age to it
