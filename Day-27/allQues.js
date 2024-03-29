"use strict";
let carInfo = {
    make: "Toyota",
    model: "Fortuner",
    year: 2001,
};
console.log(carInfo.model);
// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
carInfo.color = "Blue";
carInfo.year = 2021;
console.log(carInfo);
// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function objIteration(obj) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
// Using the function with a car object
objIteration({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
// It tells us each piece of information stored about the car.
objIteration({ name: "Naimal", surName: "Arain", age: 23, hobby: "Coding" });



