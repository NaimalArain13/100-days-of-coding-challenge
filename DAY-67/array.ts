//Type Annotation with array
let furits:  string[] = ["apple" , "banana" , "mango"];
console.log("Fruits" , furits);

//Type Annotation wiht Multi-dimentional Array
let besties:   string[] = ["Naimal" , "Filza" , "Kanwal"]
let rollNumbers : number[] = [349765 , 3534532 , 543346]

let combinedArray: (string | number)[] = ["Naimal" , "Filza" , "Kanwal" , 349765 , 3534532 , 543346]
console.log("Multi-dimentional Array" , combinedArray);
