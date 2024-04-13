"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIO = exports.student = exports.greet = exports.name = void 0;
exports.name = "Kanwal";
function greet() {
    console.log("Hello", exports.name);
}
exports.greet = greet;
class student {
    constructor() {
        this.marks = 420;
        this.grade = "A+";
    }
}
exports.student = student;
exports.TRIO = {
    frnd1: "Naimal",
    frnd2: "Filza",
    frnd3: "Kanwal"
};
