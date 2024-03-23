// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.

//defining  function with indefinite number of argument
function hobbies(...hobbies:string[]){

    //Loop through on hobbies using forEach()
    hobbies.forEach(hobbies => {
    //log each hobby in a seprate line
        console.log(`I enjoy ${hobbies}.`);
        
    });
}

//calling the function
hobbies("coding" , "reading" ,"cooking","playing with code")