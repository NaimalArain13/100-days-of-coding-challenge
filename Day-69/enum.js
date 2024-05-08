"use strict";
//Exapmle 01
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
const today = Days.Wednesday;
//   console.log(`Today is ${Days[today]}`);
//Example 02
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 0] = "up";
    Directions[Directions["down"] = 1] = "down";
    Directions[Directions["right"] = 2] = "right";
    Directions[Directions["left"] = 3] = "left";
})(Directions || (Directions = {}));
const direction = Directions.left;
console.log(`Go ${Directions[direction]}`);
