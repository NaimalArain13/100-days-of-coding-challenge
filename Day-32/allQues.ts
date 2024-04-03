
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
let food:string[] = ["Apple" , "doughnut" , "Burger" , "PineApple"]
let mapped = food.map((value)=>{
    console.log(value , value.length)
})

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function
let numbers: number[] = [34,43,42,2 ,3,5,21,1]
let filtered = numbers.filter((value)=>{
    return value < 10
});
console.log(filtered);


// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let arr: number[] = [3 ,4 ,5 ,4,6 , 5];
let sum = arr.reduce((value ,  sum)=>{
    return value + sum
})
console.log("The sum is " + sum);



