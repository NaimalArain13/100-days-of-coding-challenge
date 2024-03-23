// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

import { magician_names } from "./task41";

function Make_great(magician:string[]): string[]{
    let newmagician:string[] = []
    for(let i = 0; i < magician.length; i++){
        newmagician.push(`The Great ${magician_names[i]}`);
        
    } 
       return newmagician;
}

function Show_magicians(magicians:string[]){
    for(let i = 0; i < magicians.length; i++){
        console.log(magicians[i]);
    }
}

// Call the function make_great() with a copy of the array of magicians’ names. 
let newarray = Make_great(magician_names);


// Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.

Show_magicians(magician_names);
Show_magicians(newarray);
