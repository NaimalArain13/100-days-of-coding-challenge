//Type Annotation using object and nested objects

//Annotating object
let personInfo: {
    name : string,
    age : number,
    isFeePaid  : boolean,
    challan : {
        id: number,
        ammount: number
    }
}

//method one
personInfo = {
    name : "Naimal",
    age : 22,
    isFeePaid  : true,
    challan : {
        id: 12974,
        ammount: 5500
    }
}
console.log(personInfo);


//Annotating object
let personInfo1: {
    name : string,
    age : number,
    isFeePaid  : boolean,
    challan : {
        id: number,
        ammount: number
    }
    //method two
} = {
    name : "Naimal",
    age : 22,
    isFeePaid  : true,
    challan : {
        id: 12974,
        ammount: 5500
    }
}
console.log(personInfo1);


