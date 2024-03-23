// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
// Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting
// • Store the numbers 1 through 9 in a array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
for (var i = 0; i < numbers.length; i++) {
    // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
    if (numbers[i] === 1) {
        console.log(numbers[i] + "st");
    }
    else if (numbers[i] === 2) {
        console.log(numbers[i] + "nd");
    }
    else if (numbers[i] === 3) {
        console.log(numbers[i] + "rd");
    }
    else if (numbers[i] === 4 || 5 || 6 || 7 || 8 || 9) {
        console.log(numbers[i] + "th");
    }
}
