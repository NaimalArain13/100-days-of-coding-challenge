"use strict";
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
Object.defineProperty(exports, "__esModule", { value: true });
var task41_1 = require("./task41");
function Make_great(magician) {
    var newmagician = [];
    for (var i = 0; i < magician.length; i++) {
        newmagician.push("The Great ".concat(task41_1.magician_names[i]));
    }
    return newmagician;
}
function Show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Call the function make_great() with a copy of the array of magicians’ names. 
var newarray = Make_great(task41_1.magician_names);
// Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.
Show_magicians(task41_1.magician_names);
Show_magicians(newarray);
