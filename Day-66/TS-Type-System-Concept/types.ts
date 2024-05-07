//Union Type
let studentId: string | number 
studentId = "OOabc"

console.log("Used Union Type, Student Id" , studentId);

//Literal Type
let colorSet:  "red" | "green" | "blue"
// colorSet = "yellow"  throw type error
colorSet = "blue"

console.log("Used Literal Type, Color Set" , colorSet);

//Nullable Type
let userName: string | null 
userName = "Naimal"
userName = null
// userName = 23  throws error

console.log("Used nullable type" , userName);


//Type Alias


//type alias defining for object
type person = {
    studentName : string,
    age : number,
    email? : string,
    isFeePaid : boolean,
};

//type alias defining for variable
type id = number | string

let student:person = {
    studentName : "Niamal",
    age  : 22,
    isFeePaid : true
}

let userId: id = 0o1

console.log("Student Data" , student);
console.log("Type Alias" , userId);


//Intersection Type

type firstType = {
    name : string,
    age  : number
}

type secondType = {
    email  : string,
    address? : string
}

type combinedType = firstType & secondType

let bothType : combinedType = {
    name : "Naimal",
    age  : 22,
    email: "abc@gmail.com"
}

console.log("Intersection Type" , bothType);







