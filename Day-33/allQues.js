"use strict";
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.
//METHOD 01
//created the new data object 
let currentDate = new Date();
let currentDay = currentDate.getDay();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();
let format = `0${currentDay}-0${currentMonth}-${currentYear}`;
console.log(format);
//METHOD 02
// Console the current dat by using .toLocaleDateString() method
console.log(currentDate.toLocaleDateString());
//METHOD 03
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
//Question 98 is in q98.js file
// Question 99: Generate a date object representing your next birthday and log it to the console.
// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.
function getNextBirthday(month, day) {
    const today = new Date();
    const year = today.getFullYear();
    const nextBrithday = new Date(year, month - 1, day);
    if (nextBrithday < today) {
        nextBrithday.setFullYear(year + 1);
    }
    return nextBrithday;
}
console.log(getNextBirthday(7, 13).toLocaleTimeString() + ' is your next Birth Date');
