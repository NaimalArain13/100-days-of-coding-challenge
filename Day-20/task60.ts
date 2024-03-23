// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let userProfile = (function()
{
    let name = "Naimal";
    let age = 22;

    return {
    displayInfo : function() {
        console.log(`Name: ${name} , Age: ${age}`);
        
    }}
})(); //we have used Immediately Invoked Function Expression (IIFE)

userProfile.displayInfo()



