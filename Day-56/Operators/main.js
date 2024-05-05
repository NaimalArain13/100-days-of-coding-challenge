//Unary operator (single operand)
let x = 1
x = -x 
alert(x)  //-1 negation applied

//Binary operator
alert(2 + 4)

//Maths
alert(4 + 5)
alert(7 - 5)
alert(4 * 5)
alert(10 / 5)
alert(7 % 5)
alert(4 ** 5)

//String Concatenation with Binary +

alert("my" + " String")
alert(34 + " String")

//Numeric conversion, unary +
//no effects on number
let b = 1
alert(+b)

//effect oon non-number
let c = true
let d = ""

alert(+c)
alert(+d)

//Operator Precedence
//apply BODMAS rule
alert(3 - 5 + 5 * 5 /4)

////Assignment
let val1 = 1;
let val2 = 2;

let num = 3 - (val1 = val2 + 1);

alert( val1 ); // 3
alert( num ); // 0


//Modify-in-place
let num1 = 4
num1 = num1 * 4
num1 = num1 + 2

//Increment / Decrement Operator
alert(2++)
alert(++2)
alert(2--)
alert(--2)




















