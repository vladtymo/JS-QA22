// this is inline comment in JS
/*

this is block comment in JS

*/

// [Alt + Arrow Up/Dowm] - move line up/dowm

// -=-=-=-=-=-=-=-=- console message -=-=-=-=-=-=-=-=-
console.log("Hello world!");
console.warn("Some warning!");
console.error("Something went wrong!");

// -=-=-=-=-=-=-=-=- variables -=-=-=-=-=-=-=-=-

// create variable
let number = 10;
let word = "Good";
let flag = true;

let nullVar = null;
let undefinedVar = undefined; // not initialized

// let number = 20; error
// set another value
number = 20;

//alert(number); // 20

// -=-=-=-=-=-=-=-=- data types -=-=-=-=-=-=-=-=-
console.log("Type of number = 10: " + typeof (number)); // number
console.log("Type of word = Good: " + typeof (word));   // string   
console.log("Type of flag = true: " + typeof (flag));   // boolean

let koef = 3.2;
console.log("Type of koef = 3.2: " + typeof (koef));    // number

// -=-=-=-=-=-=-=-=- browser dialogs -=-=-=-=-=-=-=-=-

alert("Hello. It is a message in alert!");
let userName = prompt("Enter your name: ");

alert("Echo... " + userName + " " + userName + " " + userName); // concatenation
alert(`Echo... ${userName} ${userName} ${userName}`);           // interpolaiton

// -=-=-=-=-=-=-=-=- ariphmetic operators -=-=-=-=-=-=-=-=-

// operators: + - * /
let result = (2 + 2) * 2;

console.log("Result = " + result);
console.log(`Cube of result = ${result * result * result}`);

// stepin operator: **
console.log(`Cube of result = ${result ** 3}`);

// operator: %
result = 10 % 3;
console.log(`10 % 3 = ${result}`);

// get number from user
//  +{string_variable} - convert string to number
let side = +prompt("Enter length of square side: ");

console.log("type of side: " + typeof (side));
console.log(`Perimeter of square: ${side + side + side + side} cm`);

// unary operator - increment / decrement
++number;
--number;