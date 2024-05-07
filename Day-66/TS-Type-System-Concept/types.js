"use strict";
//Union Type
let studentId;
studentId = "OOabc";
console.log("Used Union Type, Student Id", studentId);
//Literal Type
let colorSet;
// colorSet = "yellow"  throw type error
colorSet = "blue";
console.log("Used Literal Type, Color Set", colorSet);
//Nullable Type
let userName;
userName = "Naimal";
userName = null;
// userName = 23  throws error
console.log("Used nullable type", userName);
let student = {
    studentName: "Niamal",
    age: 22,
    isFeePaid: true
};
let userId = 0o1;
console.log("Student Data", student);
console.log("Type Alias", userId);
let bothType = {
    name: "Naimal",
    age: 22,
    email: "abc@gmail.com"
};
console.log("Intersection Type", bothType);
