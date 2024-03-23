"use strict";
// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
Object.defineProperty(exports, "__esModule", { value: true });
exports.myComp = exports.myHeight = exports.myHobby = exports.myName = exports.myAge = void 0;
var numbers = [1, 3, 4, 5, 6, 7];
console.log(numbers[7]);
numbers[5] = 7;
// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
//Defining variable on which will conditional tests apply
exports.myAge = 23;
exports.myName = "Naimal";
exports.myHobby = "coding";
exports.myHeight = 5.2;
exports.myComp = "wheatish";
//writing conditions with comparison operators
console.log(exports.myAge === 24);
console.log(exports.myAge !== 23);
console.log(exports.myName > "Natalia");
console.log(exports.myName >= "Naimal");
console.log(exports.myHobby !== "Dancing");
console.log(exports.myHobby <= "Coding");
console.log(exports.myHeight === 6.2);
console.log(exports.myHeight > 5.2);
console.log(exports.myComp === "Wheatish");
console.log(exports.myComp !== "wheatish");
