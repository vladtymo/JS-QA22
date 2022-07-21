let number = 10;
number = 120;
number = 44;

console.log(number); // 44

let mark1 = 7;
let mark2 = 9;
let mark3 = 10.2;

let summ = mark1 + mark2 + mark3;

// -=-=-=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-=-
let emptyArray = new Array();
let arrayWithValues = new Array(7, 9, 10.2);

let marks = [7, 9, 10.2, 9, 11];

console.log("Array type: " + typeof (marks));
console.log(`Marks: ${marks}`);

// get elements
let first = marks[0];
let second = marks[1];

// set elements
marks[2] = 99;
marks[5] = 30; // create element

// show elements
for (let i = 0; i < marks.length; ++i) {
    console.log(`Element [${i}]: ${marks[i]}`);
}

// calculate summ of numbers
//summ = marks[0] + marks[1] + marks[2];
summ = 0;
for (let i = 0; i < marks.length; ++i) {
    summ += marks[i];
}
console.log("Summ: " + summ);

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

let mixedArray = [20, 5.6, 110, "green", "black", true, [1, 2, 3]];

console.log("Element count: " + mixedArray.length);

let innerElement = mixedArray[6][1];
console.log("Inner element: " + innerElement);

// creare array of functions
let functions = [(a, b) => { return a + b; }, (a, b) => a - b, (a, b) => a * b, (a, b) => a / b];

// invoke function
let result = functions[2](4, 2);
console.log("Result: " + result);

// -=-=-=-=-=-=-=-=- methods -=-=-=-=-=-=-=-=-
let array = [4, 34, 10, 8, 0, -4, 6, 8];

console.log("Array before: " + array);

array.pop();        // remove from the end
array.push(77);     // add to the end

array.shift();      // remove from the beginning
array.unshift(55);  // add to the beginning

console.log("Array after " + array);

array.sort((a, b) => a - b);
console.log("Array sorted " + array);

// jagged array
array = [1, 2, , 3];
console.log("Empty element: " + array[2]);