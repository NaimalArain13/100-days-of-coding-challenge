"use strict";
//Classes Static Members
//Static Members
class User {
    static add(number1, number2) {
        return number1 + number2;
    }
    static sub(number1, number2) {
        return number1 - number2;
    }
}
User.generateRandomId = Math.floor(Math.random() * 50);
console.log(User.generateRandomId);
console.log(User.add(2, 3));
console.log(User.sub(5, 3));
