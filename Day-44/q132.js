"use strict";
//Question 132: Discuss the difference between default and named exports in JavaScript modules.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//export default
const export_default_1 = __importDefault(require("./export_default"));
(0, export_default_1.default)("naimal");
// console.log(name);                  //variable
// greet();                 //function
// let score = new student();          //class
// console.log(score);  
// console.log(TRIO);                  //objetc
