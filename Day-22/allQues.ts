// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".


function mergeString_Number(string : string , number :number):string{
    return string +  number;
}


console.log(mergeString_Number("My age: " , 22 ));
console.log(mergeString_Number("Lucky no. " , 6));


// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

function Remainder (num1 : number  , num2 : number) : number{
    return num1 % num2
}

console.log("Remainder of 15 , 3: " +Remainder(15 , 3));
console.log("Remainder of 7 , 2: " +Remainder(7  , 2));



// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function checkBothTrue(val1 : Boolean , val2 : Boolean) : Boolean{
    if(val1 && val2 === true){
        return true;
        
    }else {
    return false;
        }
        
} 

console.log(checkBothTrue(true , false));
console.log(checkBothTrue(true , true));
