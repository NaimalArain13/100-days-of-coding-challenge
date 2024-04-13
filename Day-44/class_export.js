"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
class person {
    constructor(name, age) {
        this.name = "naimal";
        this.age = 22;
        this.name = name;
        this.age = age;
    }
}
exports.person = person;
