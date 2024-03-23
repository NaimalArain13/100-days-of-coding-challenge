// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

//make an array with mixed types
let mixedArray = ["Niamal" ,"Coding" , 23,false , {color: "light blue"},"Salahuddin"];

//Use filter method on "mixedArray" to get only string types element and store it in "onlyStirngs" variable
let onlyStrings = mixedArray.filter(element => 
//check the type of element in mixedArray is string, if yes store it in onlyStrings variable
    typeof element === "string");
    
//log the onlyStrings to see the output
console.log(onlyStrings);
