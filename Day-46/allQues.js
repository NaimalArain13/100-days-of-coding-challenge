"use strict";
// // Question 136: Use console.log() to debug and track the value of a variable inside a loop.
// // Explain & TIP: console.log() is an invaluable tool for developers to monitor the values of variables, the flow of execution, and to understand the state of their program at various points in time, especially within loops where values change with each iteration.
// for (let i = 0; i < 6 ; i++) {
//     // console.log(`Iteration  ${i}, i value: ` , i);
// }
// // Question 137: Implement a try-catch block to handle potential errors in a block of code.
// // Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.
// try {
//     throw new Error("Something went wrong")
// }catch (error:any){
//     // console.log(error.message);
// }
// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
// Explain & TIP: Breakpoints are a powerful feature in browser developer tools that allow you to pause the execution of your JavaScript code at a specific line. This gives you an opportunity to inspect variables, step through code one line at a time, and understand how your code executes in real-time.
console.log("Before breakpoint");
//print a line to set a breakpoint on it in broweser developer tool
console.log("I am going to set a breakpoint on  this line");
console.log("After breakpoint");
//Transplie it before open the js file in browser.
