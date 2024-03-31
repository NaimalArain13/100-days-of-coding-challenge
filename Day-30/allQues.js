"use strict";
// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.
function nearestInterger(decimalNumber) {
    let roundNumber = Math.round(decimalNumber);
    return roundNumber;
}
console.log(`Rouding off to the Nearest Interger ${nearestInterger(3.6)}`);
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.
function StrTOnum(input) {
    let strTOnum = (parseInt(input));
    let check = strTOnum += 2;
    return check;
}
console.log(`Converting string to the number ${StrTOnum("2435")}`);
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations
let checkNaN = (value) => {
    return isNaN(value);
};
console.log(checkNaN("naimal"));
console.log(checkNaN(3435));
console.log(checkNaN(true));
