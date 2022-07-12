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