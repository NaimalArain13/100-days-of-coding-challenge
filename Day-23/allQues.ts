// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

function mixedTypes( val1: number , val2:string):number{
    let strTOnum = parseInt(val2);
    return val1 + strTOnum
}

console.log("Sum of two mixed types values" , mixedTypes(2 , "6"));
console.log("Sum of two mixed types values" , mixedTypes(5 , "9"));



// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multiplyingDecimals(num1 :number ,  num2:number){
    let product = (num1 * num2).toFixed(2);
    console.log(product);
    
}


console.log("Product of two decimal numbers" , multiplyingDecimals(3.4 , 5.6));
console.log("Product of two decimal numbers" , multiplyingDecimals(4.8 , 3.6));




// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.


function DivideRemainder(divisor:number , dividend: number): {quotient : number , remainder : number}{
    let quotient = dividend / divisor;
    let remainder = dividend % divisor;

    return {quotient , remainder};
}


console.log(DivideRemainder(21 , 4));
console.log(DivideRemainder(43 , 7));
