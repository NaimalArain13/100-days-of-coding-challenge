// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.

//creating a common function using basic syntax
function areaOfRectangle(length:number , width:number):number{
    let areaOfRectangle:number = length * width;
    return areaOfRectangle; 
}

console.log(areaOfRectangle(7 , 3))


//refactoring to the arrow function
let  areaOfRectanglearrow = (length:number ,width:number): number =>  length * width;

console.log(areaOfRectanglearrow(8 , 7) );
