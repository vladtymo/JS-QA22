// -=-=-=-=-=-=-=-=- logic operators -=-=-=-=-=-=-=-=-

// operators: > < >= <= == !=

//let result = 10 + 20;     // number: 30
//let result = '10' + '20'; // string: '1020'

let result = 10 > 5;        // boolean: true
result = 40 >= 40;
result = 40 == 40;

result = 10 < 5;            // boolean: false
result = 10 == 5;
result = 10 != 10;

console.log("Result: " + result);

// -=-=-=-=-=-=-=-=- if else -=-=-=-=-=-=-=-=-
result = 20 < 30;

if (result) {
    // if true...
    console.log("Pravda!!!");
}

if (20 < 30) {
    console.log("Pravda!!!");
}

let number = +prompt("Enter your number:");

if (number > 0) {
    console.log("OK!");
}
else {
    console.log("Bad!");
}

// check number range [10...50]
number = +prompt("Enter number from 10 to 50:");

// logic 'and': &&
// logic 'or':  ||

if (number >= 10 && number <= 50) {
    console.log(`Your number ${number} is in the range!`);
}
else {
    console.warn(`Your number ${number} is out of the range!`);
}

if (number % 3 == 0 || number % 7 == 0) {
    console.log(`The number ${number} is multiple of 3 or 7!`);
}
else {
    console.warn(`The number ${number} is not multiple of 3 or 7!`);
}

// -=-=-=-=-=-=-=-=- confirm dialog -=-=-=-=-=-=-=-=-
let isShow = confirm("Do you want to see the message?");

if (isShow) {
    console.log("Blabla message...:)");
}

// -=-=-=-=-=-=-=-=- ternary operator ?: -=-=-=-=-=-=-=-=-
// (condition) ? value_if_true : value_if_false
number = 32;

if (number % 2 == 0) {
    console.log("Number is even!");
}
else {
    console.log("Number is odd!");
}

// 1 - with ternary operator
(number % 2 == 0) ? console.log("Number is even!") : console.log("Number is odd!");

// 2 - with single console.log()
let message = (number % 2 == 0) ? "even" : "odd";
console.log(`Number is ${message}!`);

// 3 - without variable
console.log(`Number is ${(number % 2 == 0) ? "even" : "odd"}!`);