"use strict";
// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
// Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It's especially useful for scheduling tasks, animations, or delaying execution without blocking the main thread.
// setTimeout(() => {
//     //code block
//     console.log("This will be run after 2 sec");
// }, 2000);
// Question 149: Explain the concept of the event loop in JavaScript with an example.
// Explain & TIP: The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. It monitors the call stack and the callback queue. If the call stack is empty, it moves the first event from the queue to the stack, ensuring non-blocking execution.
// console.log('commence');
// setTimeout(() => {
//     console.log("This is day 50 of 10 days of coding challenge");
// }, 0);
// console.log("Finish");
// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.
//synchronous Code
console.log("Before Synchronous Operation");
// "1e9" stands for 1 × 10^9, which is equivalent to the number 1,000,000,000 (one billion). This notation is used in many programming languages
for (let i = 0; i < 1e9; i++) {
    //this is  LONG LOOP
}
console.log("After Synchronous Operation");
//asynchronous code
console.log("Before asynchronous Operation");
setTimeout(() => {
    console.log("asynchronous operation finished");
}, 0);
console.log("After asynchronous Operation");
