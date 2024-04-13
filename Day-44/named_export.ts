//Named exports
//used for multiple import at a time with their names individually


//defining and exporting a variable 
export const name:string = "Kanwal";

//defining and exporting a function
export function greet(){
    console.log("Hello" , name);
    
}

//defining and exporting a class 
export class student{
    marks = 420;
    grade = "A+";
}

//defining and exporting an object 
export let TRIO = {
    frnd1 : "Naimal", 
    frnd2 : "Filza" , 
    frnd3 : "Kanwal"
}