// Question 136: Use console.log() to debug and track the value of a variable inside a loop.

// Explain & TIP: console.log() is an invaluable tool for developers to monitor the values of variables, the flow of execution, and to understand the state of their program at various points in time, especially within loops where values change with each iteration.
for (let i = 0; i < 6 ; i++) {
    console.log(`Iteration  ${i}, i value: ` , i);

}

// Question 137: Implement a try-catch block to handle potential errors in a block of code.

// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.
try {
    throw new Error("Something went wrong")
}catch (error:any){
    console.log(error.message);

}


