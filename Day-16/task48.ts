// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.

let priceofLaptop1 = [12000, 14000, 16000]
let priceofLaptop2 = [13000, 19000, 20000]

let combinePrices = [...priceofLaptop1 , ...priceofLaptop2].sort((a , b)=> a - b)
console.log(combinePrices);
