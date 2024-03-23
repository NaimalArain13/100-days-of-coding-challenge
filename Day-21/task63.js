"use strict";
// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
let rectangle = {
    kind: "rectangle",
    sides: "2 pairs of opposite sides are equal",
    faces: "two flat faces",
    angle: "right angle (90°)",
    shape: "2D",
    vertices: 4
};
let circle = {
    kind: "circle",
    sides: "no side",
    faces: "Two flat faces",
    angle: "360° angle",
    shape: "2D",
    vertices: 0
};
console.log(rectangle);
console.log(circle);
