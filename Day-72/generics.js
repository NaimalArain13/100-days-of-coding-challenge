"use strict";
//Generics
// // A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets ( <> ) following the name of ...
// // Generics in TypeScript allow you to create reusable components that can work with a variety of data types while still maintaining type safety. Here are some examples of generics in TypeScript:
// //Declaring varaibles with a single types
let names;
let ages;
let isPaid;
// //Using generics systax but noe in correct manner
const score = [];
const score2 = [];
const score3 = [];
// //Creating multiple identity function that will take specified types.
//you can pass this function either a number or boolean
function identityOne(val) {
    return val;
}
// //you can pass this function either a string or boolean
function identityTwo(val) {
    return val;
}
// //you can pass this function either a number or string
function identityThree(val) {
    return val;
}
// //you can pass this function any type and it will return any type
function identityFour(val) {
    return val;
}
// //this is actually Generic Function
function identityFive(val) {
    return val;
}
function identitySix(val) {
    return val;
}
// //Using your own type in identity function
function identitySeven(val) {
    return val;
}
let myVar = identitySeven({ name: "Filza", age: 13, city: "Karachi" });
let myVar2 = identitySeven({ name: "Filza", age: 13, height: "hyderbad" });
console.log(myVar);
console.log(myVar2);
// //Two common ways to call genric function
//with strong typing
let invoking = console.log(identitySeven("NAIMAL"));
console.log(identitySeven(23));
// //With type inference
console.log(identitySeven("naimal"));
console.log(identitySeven(true));
function identity(val) {
    return val;
}
let obj2 = identity({ name: "Filza", age: 45, city: "KRC" });
let obj = identity({ name: "Filza", age: 45, city: "HYD" });
console.log(obj);
console.log(obj2);
// obj2.city = "lah"  //Cannot assign to 'city' because it is a read-only property.
obj2.name = "Kanwal";
