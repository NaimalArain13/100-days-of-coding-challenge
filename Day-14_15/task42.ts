// Question 42: Great Magicians: Add "the Great" to magician names. 

import { magician_names } from "./task41";

// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
function make_great(){
    for(let i = 0; i < magician_names.length; i++){
        console.log(`The Great ${magician_names[i]}`)
    }    
}

// Call show_magicians() to see that the list has actually been modified.
make_great();
