// Question 18: Seeing the World: Think of at least five places you’d like to visit.
// Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.
var places = ["Saudia Arabia", "Dubia", "Malaysia", "Switzerland", "Canada"];
var slice1 = places.slice(1, 4);
var slice2 = places.slice(-1);
var slice3 = places.slice(1);
console.log(places.sort());
console.log(slice1); // return from index 1 (Dubai) to index 3 (Swizerland). index 4 is exclusive
console.log(slice2); // return last element
console.log(slice3); // return from index 1 to 4
