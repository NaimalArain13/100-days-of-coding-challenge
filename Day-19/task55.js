// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var numbers = [2, 4, 5, 6, 7, 8];
//declare a variable and initialize with and empty array
var doubledNumbers = [];
//Use for each to iterate over each item and them multiply it with 2
numbers.forEach(function (item) {
    //Use push method to store doubled numbers in the variable 
    doubledNumbers.push(item * 2);
});
//log the doubledNumbers to see the output
console.log(doubledNumbers);
