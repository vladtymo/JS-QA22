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