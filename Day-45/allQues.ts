// Question 133: Write a JavaScript object and convert it into a JSON string.

// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().
const myObj = {
    name : "Naimal",
    age  : 23,
    isMarried : true
}
const jsonString = JSON.stringify(myObj)
console.log(typeof jsonString , jsonString);



// Question 134: Take a JSON string and parse it into a JavaScript object.

// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.
let jsObj = JSON.parse(jsonString)
console.log(typeof jsObj , jsObj);





// Question 135: Explain how you can format a JSON string with proper indentation for readability.

// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.

const person = {
    std1 : "Natalia",
    std2 : "Taimoor",
    std3 : "Sukaina"
}

let jsonStr = JSON.stringify(person , null , 2) 
console.log(typeof jsonStr , jsonStr);

