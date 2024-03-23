//FUNCTION WITH REST PAARMETER
function halfFryEgg(egg: number , ...ingredients: number[]){
    console.log(egg);
    console.log(ingredients);
    
    
}
//TRADITIONAL FUNCTION WITH REST PARAMETER AND SPREAD OPERATOR
function halfFryEgg1(egg: number , ...ingredients: number[]){
    console.log(egg);
    console.log(...ingredients);
    
    
}

// halfFryEgg(2,3,5,6,6)
// // halfFryEgg1(2,3,5,6,6)
// halfFryEgg1(2,3,5,6,6)


//ARROW FUNCTION
let halfFryEgg2 = () => 2 + 1.5 + 3;

// // console.log(halfFryEgg2())

//ARROW FUNCTION WITH PARAMETERS
let egg = (egg:number , butter: number , salt:number) =>(
egg + butter + salt

);

// //  console.log(egg(1 , 4.4 ,2));

// IMMEDIATELY INVOKE FUNCTION EXPRESSION
(function() {
    console.log("run immediately");
    
} ) //() ;


// //Recursive Function
function countDown(number : number):void{
    if (number <= 0 ){
        console.log("Done!");
        return;

    }
    console.log(number);
    countDown(number - 1)    

}

// // countDown(6)

//CALCULATE FACTORIAL
function factorial(n: number):number{
    if(n === 0){
      return 1;
    }
    return n * factorial(n - 1)
}
//5 * 4 * 3 * 2 * 1 = 

// console.log(factorial(5));



/*
PRACTICE SESSION FOR BEGNINNERS


let NAME = "naimal";
let AGE  =  23;
let HOBBY =  "CODING";
let IsMARRIED: false;
//array identification [] (square brackets)

let MYINTRO:string[] = ["naimal" , "23" , "coding" , "false"]   //array

let globalScope = 24;
//object  {}  
function block(){
    let blockScope = 35;  //block code
    console.log(blockScope);
}
block()
console.log(globalScope);
// console.log(blockScope);

let age =20;
if(age === 18 || age > 18){
    console.log(`Your age is valid for vote casting`);  
}else{
    console.log(`Your age is not valid for vote casting`);
    
}*/













