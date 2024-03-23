// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

//write a traditional function
function makeadder(valueToAdd :number) : (number) => number{
    return function(number : number){
        return number + valueToAdd;
    }
}


//Write an arrow function that work same like above one
const  makeAdder = (valueToAdd: number) => (number:number)=> number  + valueToAdd;
    


//show arraw function output
let make8 = makeAdder(8);
console.log(make8(12));

//show traditional function output
let make_8 = makeadder(8);
console.log(make_8(12));



