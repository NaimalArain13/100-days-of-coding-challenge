// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.

//create a map object
let countries = new Map<string , string>();
//add countries name as a key and countries' capital as a value 
countries.set("Pakistan" , "Islamabad");
countries.set("China" , "Beijing");
countries.set("Afghanistan", "Kabul");

//log the map
console.log(countries);




// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
//create the map object 
function capitalOfCanada(countries : Map<string , string>){
    //check if Canada is in the map or not
    if(countries.has("Canada")){
        console.log(`The Capital of Canada is ${countries.get("Canada")}`);
    }else { 
        console.log("Canada is not in the map");
    }
}

//invoke the function
// capitalOfCanada(countries)


// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.
let studentID = new Map<number , string>();
studentID.set(1 , "Naimal Salahuddin");
studentID.set(2 , "Kanwal Ghulam Muhammad");
studentID.set(3 , "Filza Danish");
studentID.set(4 , "Fiza Langah");

// studentID.forEach((name, id) => {
//     console.log(`Student ID: ${id}, Name: ${name}`);
//   });
