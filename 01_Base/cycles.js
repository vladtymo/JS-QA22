// -=-=-=-=-=-=-=-=- while -=-=-=-=-=-=-=-=-
// while (condition) {
//     code... if condition = true    
// }

// infinity loop
// !!! bad example
// while (5 > 0) {
//     console.log("5 is bigger than 0");
// }

let counter = 0;

while (counter < 10) {

    console.log("Iteration - " + counter);

    // increment counter
    ++counter;

    // if (counter == 10) 
    // break; // close the cycle
}

console.log("continue...");

// enter student's mark while value out of the range 1...5
let mark = +prompt("Enter student's mark in the range 1...5:");

while (mark < 1 || mark > 5) {
    console.error(`Mark ${mark} is out of the range 1...5!`);
    mark = +prompt("Enter mark in the range 1...5 again:");
}

console.log("Great! Your mark is " + mark);

// -=-=-=-=-=-=-=-=- do while -=-=-=-=-=-=-=-=-
// do {
//     code... if condition = true    
// } while (condition);

// enter student's mark while value out of the range 1...5
do {
    mark = +prompt("Enter student's mark in the range 1...5:");

} while (mark < 1 || mark > 5);

console.log("Great! Your mark is " + mark);

// enter numbers until 0
let num = 0;
let summ = 0;
do {
    num = +prompt("Enter a number:");
    summ += num;

} while (num != 0);

console.log("Summ = " + summ);

// -=-=-=-=-=-=-=-=- for -=-=-=-=-=-=-=-=-
// for(initialize variables; condition; expression) { code... }

for (let i = 0; i < 10; ++i) {
    console.log(`Iteration [${i}]`);
}
// the same with 'while' cycle
// let i = 0;
// while (i < 10) {
//     console.log(`Iteration [${i}]`);
//     ++i;
// }

for (let a = 1, b = 10; a < b; ++a, --b) {
    console.log(`a: [${a}] - b: [${b}]`);
}

// show factorial of the user's number
// !5 = 1 * 2 * 3 * 4 * 5 = 120
num = +prompt("Enter a number to get factorial:");
let result = 1;

for (let i = 2; i <= num; ++i) {
    result *= i;
}

console.log(`!${num} = ${result}`);

// -=-=-=-=-=-=-=-=- for of -=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=- for in -=-=-=-=-=-=-=-=-