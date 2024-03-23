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
