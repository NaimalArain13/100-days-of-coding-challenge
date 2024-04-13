// Question 127: Convert a traditional function expression to an arrow function.
var _this = this;
// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.
function sum1(val1, val2) {
    return val1 + val2;
}
console.log(sum1(2, 3));
var sum = function (val1, val2) { return val1 + val2; };
console.log(sum(2, 3));
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.
var multiply = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (val, product) { return val * product; }, 1);
};
console.log(multiply(2, 4, 3, 5, 6, 6, 7));
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.
var myObject = {
    value: "TraditionlvsArrow",
    traditionalFunction: function () {
        console.log("traditionalFunction", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
    },
};
myObject.traditionalFunction();
myObject.arrowFunction();
