"use strict";
// Question 139: List three reserved words in JavaScript and create a valid use case for each.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.
//Reserved word "const" used for declare a constant variable
const ID = 1244;
// console.log(ID);
//Reserved word "for" used for iteration for a known period of time
for (let i = 0; i < 5; i++) {
    // console.log(i);
}
//Reserved word "new" used to create a new instance of a defined class
let currentTime = new Date();
// console.log(currentTime.toLocaleDateString());
// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// Explain & TIP: Attempting to use a reserved word as a variable name will cause a syntax error in JavaScript. This is because reserved words have predefined meanings and uses in the language syntax.
//using reserved word "function" that is used to define a function in javascript
// let function = "addNumber";  //throw an error
// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
// using "await" keyword in asynchronous javascipt
// Example use of the 'await' reserved word in asynchronous JavaScript
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        // Assuming fetchSomething returns a Promise
        const data = yield fetchData();
        console.log(data);
        // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
    });
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
// This demonstrates how 'await' improves readability and flow in asynchronous code.
// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.
