//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myName : string = "Naimal";
console.log(myName.toLowerCase());  //This will display the name in lowercase letters
console.log(myName.toUpperCase());  //This will display the name in Uppercase letters
//This will display the first letter in uppercase and remaining letters in lowercase
console.log(myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase());  

