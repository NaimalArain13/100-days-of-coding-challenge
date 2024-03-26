// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
function addTwo(num1:number , num2:number):number{
    let add = num1 + num2
    return add
}
let result = addTwo(2 ,4);
console.log(result);

// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greetUser(user:string = "Anonymous"){
    console.log(`Hello ${user}`);
    
}
greetUser("Naimal");
greetUser()

// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function declaration(number: number):number{
    let square = number *  number
    return square
}

const expression = function(number: number):number{
    let square = number * number
    return square
}
console.log(declaration(2));
console.log(expression(2));

