// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
var diflaptops = [
    {
        make: "HP",
        model: "HP spectre x360 Luxury 14T",
        year: 2001
    },
    {
        make: "DELL",
        model: "XPS 14",
        year: 2020
    },
    {
        make: "DELL",
        model: "inspiron",
        year: 2022
    },
    {
        make: "Apple",
        model: "MacBook",
        year: 2023
    }
];
var laptop1 = diflaptops[0], laptop2 = diflaptops[1];
console.log(laptop1);
console.log(laptop2);
