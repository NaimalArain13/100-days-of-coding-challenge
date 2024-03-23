// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
var MyFavPizzaFlavour = ["Tikka", "Fajita", "Kababish"];
for (var i = 0; i < MyFavPizzaFlavour.length; i++) {
    console.log(MyFavPizzaFlavour[i]);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
MyFavPizzaFlavour.forEach(function (flavour) {
    console.log("I really like to have " + flavour + " with my friends");
}); //){
//     console.log("I really like to have " + MyFavPizzaFlavour[i] + " with my friends");
// }
