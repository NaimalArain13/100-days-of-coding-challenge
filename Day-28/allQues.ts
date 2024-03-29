// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
function checkLength(input:string):number{
    return input.length
}
console.log(checkLength("NAIMAL"));


// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function caseConversion(input: string){
    console.log(input.toUpperCase());
    console.log(input.toLowerCase());
}

caseConversion("NaimAl");


// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replaceText(input:string){

    let replaced = input.replace(/javascript/g , "typescript")
    console.log(replaced);
    
}
replaceText("I love javascript and my friends aslo love to learn javascript")


