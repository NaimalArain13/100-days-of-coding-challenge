"use strict";
//Abstract Classes
//It allows you to create a blue print of all common properties you want to have in your child classes.
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
        this.displayArea = () => {
            `This is the ${this.color} Circle with radius ${this.radius}`;
        };
    }
    calculateArea() {
        let areaCircle = (Math.PI * this.radius * this.radius).toFixed(2);
        return Number(areaCircle);
    }
}
class Rectangle extends Shape {
    constructor(color, height, width) {
        super(color);
        this.color = color;
        this.height = height;
        this.width = width;
        this.displayArea = () => {
            `This is the ${this.color} Circle with raduis ${this.calculateArea()}`;
        };
    }
    calculateArea() {
        return this.height * this.width;
    }
}
const circle = new Circle("blue", 2);
const rectangle = new Rectangle("green", 4, 6);
console.log(circle.calculateArea());
circle.displayArea();
console.log(rectangle.calculateArea());
circle.displayArea();
