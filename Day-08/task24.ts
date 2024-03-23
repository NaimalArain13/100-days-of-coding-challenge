// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

import { myName , myAge , myComp , myHeight ,myHobby } from "./task22_23";

//writing conditional test with logical operators
console.log((myName === "") && (myAge !== 23));
console.log((myAge <= 23) || (myHeight !== 5.3));
console.log((!myName.length));
console.log((myHobby <= "coding") || myComp === "Wheatish");

let fruits:string[] = ["apple" , "mango" , "banana" , "grapes" , "cherry"];

console.log(fruits[3] === "grapes");
console.log(!fruits.length);
console.log(fruits[0] !== "mango");
console.log(fruits.length === 5);



