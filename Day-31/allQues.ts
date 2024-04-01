// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

// Explain & TIP: Adding elements to an array can be easily done using the .push() method. It allows you to add new items to the end of an array.
let fruits:string[] = ["Apple" , "Banana", "Orange"];
fruits.push("Kiwi")
// console.log(fruits);



// Question 92: Write a function to remove the last element from an array and return the removed element.

// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.
function colors(items : string[]){
    let removedItem = items.pop()
    return removedItem
}
// console.log(colors(["blue", "yellow", "pink" , "orange"] ))



// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.

let fruitsName: string[] = ["Strawberry" , "PineApple", "Papaya" , "CustardApple" , "Banana"]
let searchItem = fruitsName.indexOf("Banana");             console.log(searchItem);
let replacedItem = fruitsName[searchItem] = "Mango";       console.log(replacedItem);
console.log(fruitsName);
