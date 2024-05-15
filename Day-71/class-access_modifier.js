"use strict";
//Class Access Modifier
//1-Public  (When used, you can access the class member anywhere like in parent class, it's subclasses, outside the class too )
//2-Protected  (When used, you can access the class members in parent class and it's subclasses only)
//3-Private  (When used, you can access the class member only in the parent class)
//Using Public Access Modifer
//Parent Class
class Persons {
    constructor(name, age, ...hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduceParent() {
        return `I am ${this.name}, a ${this.age} years individual. My hobbies are ${this.hobbies}`;
    }
}
//Child Class
class Students extends Persons {
    constructor(name, age, grade, ...hobbies) {
        super(name, age, ...hobbies);
        this.grade = grade;
    }
    introducechild() {
        return `${super.introduceParent()}, I am ${this.grade} years old`;
    }
}
//Initiated Classes
const person1 = new Persons("Naimal", 23, "Coding , Eating"); //accessed in the parent class
const student1 = new Students("Naimal", 23, 10, "Coding , Eating"); //accessed in the child class
console.log(person1);
console.log(student1);
console.log(person1.introduceParent());
console.log(student1.introducechild());
console.log(person1.name); //accessed outside
// console.log(student1.age); //only access with in the class
