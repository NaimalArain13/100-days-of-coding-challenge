// Question 106: Determine if a given year is a leap year using comparison operators.

// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.
function isLeapYear(year : number):boolean{
    let leapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    return leapYear
}

// console.log(isLeapYear(2028));
// console.log(isLeapYear(2017));



// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

// Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.
function divisible_by_two_three(numbertoCheck : number):boolean{
    let divisiblebyBoth = numbertoCheck % 2 == 0 && numbertoCheck % 3 == 0 || numbertoCheck % 6 == 0
    return divisiblebyBoth
}

// console.log(divisible_by_two_three(5));
// console.log(divisible_by_two_three(6));



// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
function comapringString(input1 : string , input2 : string):boolean{
    let isIdentical = input1.toLowerCase() === input2.toLowerCase()
    return isIdentical
}

console.log(comapringString("naimal" , "NaiMAl"));
console.log(comapringString("HarEEM" , "Mehreen"));
