"use strict";
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.
function findPosition(searchString) {
    let string = searchString.indexOf("CODE".toLowerCase(), 0);
    return string;
}
// console.log(findPosition("Some of the code is missing in this block"))  //return 12
// console.log(findPosition("Do not write the wrong program"));            // return -1
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).
function checkTextPresence(text) {
    let textCheck = text.includes("JavaScript".toLowerCase());
    return textCheck;
}
// console.log(checkTextPresence("Last love javascript"));          //return true
// console.log(checkTextPresence("Current love TypeScript"));       //return false
// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.
let sentence = "Hello everyone! hope you all are doing well";
let subtring = sentence.substring(0, 11);
console.log(subtring); //return 1st 10 characters from the given string
