//INTERFACE INTRO

interface personInfo { 
    name : string,
    age  : number
}

const UserInfo: personInfo = { 
    name :"Naimal",
    age  : 22
}
// console.log(UserInfo);


//INTERFACE METHOD AND PARAMETERS 
interface Person {
    name : string,
    age : number,

    greet(message : string): string
}

const myObj : Person = { 
    name : "NAIMAL",
    age : 22,
    greet(message : string) {
        return `${this.name} says: ${message}`;
    }
}
const displayGreetMessage = myObj.greet("Hello, this is an Interface")
// console.log(displayGreetMessage);


// REOPEN THE INTERFACE AND USE CASES

//HomePage interface declaration
interface Setting { 
    readonly theme : boolean,
    font : string
}


//Article page interface Reopening

interface Setting {
    sidebar : boolean
}

//Contact Page Interface Reopening

interface Setting { 
    external : boolean
}


// Create an object 'userSettings' that adheres to the merged 'Settings' interface
const userSettings : Setting = { 
    theme : true,
    font : "serif",
    sidebar : true,
    external : false,
}


//INTERFACE VS. TYPE ALIASES

//interface
interface personExInfo { 
    name : string,
    age  : number
}

//Type
type personExInfo1  = { 
    name : string,
    age  : number
}

//Extending and Implementing

interface animalExInterface { 
    name : string
};

interface Cat extends animalExInterface { 
    sound() : void
};

class AnimalBreed implements Cat {
    name = "Cat";
    sound(){
        console.log(`${this.name} "Meow!"`);
        
    }

}

//Type
type AnimalExType = { 
    type : string
}

type AddAnimalExType = AnimalExType & {
    breed():void
}

const thisType:  AddAnimalExType = {
    type  : "Dog",
    breed(){
        console.log(this.type , "Barks");  
    }
}

//Compatibility
interface Car { 
    brand : string
}
interface Car { 
   model: string
}

const thisCar : Car = {
    brand : "Toyota",
    model : "Camry"
}























// interface addingAddress{
//     isMuslim: boolean,
//     address : {
//         city: string,
//         country: string
//     }
// }

// interface