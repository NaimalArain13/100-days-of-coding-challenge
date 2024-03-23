"use strict";
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var Vehicles;
(function (Vehicles) {
    Vehicles["cars"] = "Cars";
    Vehicles["trucks"] = "Trucks";
    Vehicles["motorcycles"] = "MotorCycle";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.motorcycles);
console.log(Vehicles.cars);
console.log(Vehicles.trucks);
console.log(Vehicles);
