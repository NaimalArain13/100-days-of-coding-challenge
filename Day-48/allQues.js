"use strict";
// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.
let createPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000); //2 sec
});
//use .then() to display the output on terminal
// createPromise.then((message)=> console.log(message));
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
let promiseMethod = new Promise((resolve, reject) => {
    const success = "Naimal".includes("a");
    if (success) {
        resolve("Success");
    }
    else {
        reject(new Error("Failure"));
    }
});
// promiseMethod.then((success)=> console.log(success))   //handles resolution
// .catch((error)=> console.log(error.message));          //handles rejection
// Question 144: Explain the use of the Promise.all() method with an example.
// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.
const promise1 = Promise.resolve(6);
const promise2 = Promise.resolve(13);
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log((values));
});
