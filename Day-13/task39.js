// Question 39: City Names: Formatting city-country pairs.
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
function city_country(city, country) {
    // The function should return a string formatted like this:
    // "Lahore, Pakistan"   
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
// Call your function with at least three city-country pairs, and print the value that’s returned.
city_country("Tehran", "Iran");
city_country("Kabul", "Afghanistan");
city_country("Washington DC", "America");
