// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function myDynamicObjectKey(key, value) {
    var Object = {};
    Object[key] = value;
    return Object;
}
var userPrefrence = myDynamicObjectKey("color", "light blue");
var userPrefrence2 = myDynamicObjectKey("Eye color", "Grey");
console.log(userPrefrence);
console.log(userPrefrence2);
