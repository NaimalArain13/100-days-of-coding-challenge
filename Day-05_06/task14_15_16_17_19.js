// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Zakia", "Rukaiya", "Shehnaz"];
guestList.forEach(function (Element) {
    console.log("I would cordially invite you to the dinner ".concat(Element, "."));
});
//Task 15
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var notCome = guestList.pop();
console.log("Dear ".concat(notCome, ", I just heared that you can't make it to the Dinner"));
guestList.push("Meherma");
guestList.forEach(function (Element) {
    console.log("Dear ".concat(Element, ", I cordially invite you to the Dinner"));
});
//Task 16
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
// Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.
console.log("I want to let you know that I have a big Dinner table now");
//Adding more guest to the array "guestList".
guestList.unshift("Kainat");
guestList.splice(3, 0, "Mehwish");
guestList.push("Sehrish");
guestList.forEach(function (Element) {
    console.log("Dear ".concat(Element, ", I cordially invite you to the Dinner."));
});
//task 17
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.
console.log("Sad new for everyone, the big dining table I ordered for a dinner won't arrive on time so I can only invite 2 guests");
//Removing guest from the list
guestList.pop();
guestList.shift();
guestList.splice(3, 1);
guestList.forEach(function (Element) {
    console.log("Dear ".concat(Element, ", I cordially invite you to the Dinner"));
});
// //Task 19Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
// Explain & TIP: Arrays have a length property that tells you how many items are in the list. Use this to inform your guests how big the party will be.
console.log("I have invited ".concat(guestList.length, " to the Dinner"));
