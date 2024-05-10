"use strict";
//INTERFACE INTRO
const UserInfo = {
    name: "Naimal",
    age: 22
};
console.log(UserInfo);
const myObj = {
    name: "NAIMAL",
    age: 22,
    greet(message) {
        return `${this.name} says: ${message}`;
    }
};
const displayGreetMessage = myObj.greet("Hello, this is an Interface");
// console.log(displayGreetMessage);
// interface addingAddress{
//     isMuslim: boolean,
//     address : {
//         city: string,
//         country: string
//     }
// }
// interface
