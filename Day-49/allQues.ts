// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function with custom actions.

function executeCallbacks(
  callback: (arg1: string, arg2: string) => void,
  arg1: string,
  arg2: string
): void {
  callback(arg1, arg2);
}
// example caalback function
const concatString = (a: string, b: string) => {
  console.log(a + b); //concate both strings
};

executeCallbacks(concatString , "naimal "  ,  " Salahuddin");

// Question 146: Show an example of a callback function used to filter an array of numbers.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. This method is commonly used to search through an array and create a subset of it based on certain criteria.

const numberArray: number[] = [1, 2, 3, 4, 5, 5, 7, 6, 7, 8, 4, 3];

const filteredArray: number[] = numberArray.filter((number) => number > 5);

// console.log(filteredArray);

// Question 147: Explain how to handle errors in a callback pattern.
// Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to the callback. This convention allows the callback function to check for errors before proceeding with its execution.

//function that uses a callback pattern , including error handling
// function fetchData(
//   callback: (error: Error | null, data?: string) => void
// ): void {
//   //Declaring variables
//   const error = new Error("Falied to fetch data");
//   const data = "Some data";

//   //pplace a check here
//   if (Math.random() > 0.5) {
//     callback(null, data); //fetched successfully
//   } else {
//     callback(error); // passes error to the callbacks
//   }
// }

// //Using the fetch with error handling in the callback
// fetchData((error, data) => {
//   if (error) {
//     console.error(error.message); //handles error
//   } else {
//     console.log(data); //processes the data
//   }
// });
