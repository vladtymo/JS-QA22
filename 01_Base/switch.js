// -=-=-=-=-=-=-=-=- if else if -=-=-=-=-=-=-=-=-

let mark = +prompt("Enter student's mark:");

// show description of the student's mark
// 5 - Excellent, 4 - Good, 3 - Normal, 2 - Bad, 1 - Very bad

if (mark == 5) console.log("Excellent");
else if (mark == 4) {
    console.log("Good");
}
else if (mark == 3) {
    console.log("Normal");
}
else if (mark == 2) {
    console.log("Bad");
}
else if (mark == 1) {
    console.log("Very bad");
}
else {
    console.error("Invalid mark. Value must be in range 1...5!");
}

// -=-=-=-=-=-=-=-=- switch -=-=-=-=-=-=-=-=-

switch (mark) {
    case 1: // code 
        console.log("Very bad");
        break; // go out the switch block
    case 2:
        console.log("Bad");
        break;
    case 3: console.log("Normal");
        break;
    case 4: console.log("Good");
        break;
    case 5: console.log("Excellent");
        break;
    case -5: console.log("Only for test");
        break;
    case 33: console.log("Only for test");
        break;
    default: console.error("Invalid mark. Value must be in range 1...5!"); break;
}

// show the reversed direction of the ship
let direction = prompt("Enter ship direction:");

switch (direction) {
    case "north":
        console.log("Reversed direction is " + "south.");
        break;
    case "south":
        console.log("Reversed direction is " + "north.");
        break;
    case "east":
        console.log("Reversed direction is " + "west.");
        break;
    case "west":
        console.log("Reversed direction is " + "east.");
        break;
    default:
        console.error("You entered incorrect direction. Please try again!");
        break;
}

// show the season's name of the month by number
let month = +prompt("Enter the month (1...12):");

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log("Season: winter!");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Season: spring!");
        break;
    case 6: case 7: case 8:
        console.log("Season: summer!");
        break;
    case 9: case 10: case 11:
        console.log("Season: autumn!");
        break;
    default:
        console.error("You entered incorrect month. Value must be in range 1...12!");
        break;
}