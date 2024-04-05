"use strict";
// Question 103: Write a function that returns a random boolean value, true or false.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.
function rndmBool() {
    let randomNumber = Math.random().toFixed(1);
    let number = parseFloat(randomNumber);
    console.log(number);
    if (number > 0.5) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
// rndmBool();
// Question 104: Create a function that generates a random hexadecimal color code.
// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.
function getRandomHexColor() {
    let color = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    return color;
}
console.log(getRandomHexColor());
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
// Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() along with some arithmetic to achieve this range.
function diceRoll() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}
// diceRoll()
