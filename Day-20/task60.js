// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var name = "Naimal";
    var age = 22;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, " , Age: ").concat(age));
        }
    };
})(); //we have used Immediately Invoked Function Expression (IIFE)
userProfile.displayInfo();
