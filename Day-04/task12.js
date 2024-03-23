// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. 
// The message should be the same for each person, but personalized with their name.
//creating an array of friends
var myFriends = ["Naimal", "Filza", "Kanwal"];
//using for each to print each name, one at a time
myFriends.forEach(function (element) {
    console.log("Hello, " + element);
});
