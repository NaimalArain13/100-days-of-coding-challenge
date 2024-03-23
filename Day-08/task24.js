"use strict";
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
Object.defineProperty(exports, "__esModule", { value: true });
var task22_23_1 = require("./task22_23");
//writing conditional test with logical operators
console.log((task22_23_1.myName === "") && (task22_23_1.myAge !== 23));
console.log((task22_23_1.myAge <= 23) || (task22_23_1.myHeight !== 5.3));
console.log((!task22_23_1.myName.length));
console.log((task22_23_1.myHobby <= "coding") || task22_23_1.myComp === "Wheatish");
var fruits = ["apple", "mango", "banana", "grapes", "cherry"];
console.log(fruits[3] === "grapes");
console.log(!fruits.length);
console.log(fruits[0] !== "mango");
console.log(fruits.length === 5);
