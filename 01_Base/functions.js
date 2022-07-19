// -=-=-=-=-=-=-=-=- functions -=-=-=-=-=-=-=-=-

// function template: function name(parameter1, parameter2...) { body }

function showMessage() {
    console.log("Hello JavaScript!");
}

// function invokation: name(parameter1, parameter2);
showMessage();

// -=-=-=-=-=-=-=-=- function with parameters -=-=-=-=-=-=-=-=-

// !5 = 1 * 2 * 3 * 4 * 5 = 120
function showFactorial(number) {

    //let number = +prompt("Enter a number: ");
    let result = 1;

    for (let i = 2; i <= number; ++i) {
        result *= i;
    }

    console.log(`Factorial of ${number} = ${result}`);
}

//let value = +prompt("Enter a number: ");

// showFactorial(value);
// showFactorial(value);
// showFactorial(value);

function showRandomNumber(min, max) {

    // [min...max)
    const value = Math.random() * (max - min) + min;
    const integer = Math.floor(value);

    console.log("Your random number is " + integer);
}

showRandomNumber(0, 10);
showRandomNumber(20, 30); // 20 ... 30

let left = 50, right = 100;
showRandomNumber(left, right);

// -=-=-=-=-=-=-=-=- function with return operator -=-=-=-=-=-=-=-=-
function getRandomNumber(min, max) {

    // [min...max)
    const value = Math.random() * (max - min) + min;
    const integer = Math.floor(value);

    return integer; // return value and close the function
}

let randomNumber = getRandomNumber(40, 60);
console.log("Random number from 40 to 60: " + randomNumber);

console.log("Random number from 100 to 200: " + getRandomNumber(100, 200));

function calculate(a, b, operation) {

    if (operation == '/' && b == 0) {
        console.error("Cannot divide by zero!");
        return null;
    }

    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default:
            console.error("Invalid operation.");
            return null;
    }
}

console.log("Result: " + calculate(-2, 2, '+'));    // 0
console.log("Result: " + calculate(5, 10, '-'));
console.log("Result: " + calculate(3, 5, '*'));
console.log("Result: " + calculate(2, -10, 'ABC')); // error
console.log("Result: " + calculate(100, 4, '/'));
console.log("Result: " + calculate(55, 0, '/'));    // error