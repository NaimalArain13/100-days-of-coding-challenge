// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

// Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.


const today = new Date();
// const newYear = new Date(today.getFullYear() +1, 0 , 1);    //getFullYear + 1 equal to the 2024 + 1 = 2025
// Get the current year
const currentYear = new Date().getFullYear()+1
// Get the date for New Year's first day which is 1st jan 2025
const newYearEvening = new Date(currentYear ,0, 1);
const timeDiff = newYearEvening - today
const dayUntilNewYear = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
console.log(dayUntilNewYear);