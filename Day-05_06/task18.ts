// Question 18: Seeing the World: Think of at least five places you’d like to visit.

// Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.

let places: string[] = ["Saudia Arabia", "Dubia" , "Malaysia","Switzerland" , "Canada"];
let slice1 = places.slice(1 , 4);  
let slice2 = places.slice(-1);     
let slice3 = places.slice(1);   
console.log(places.sort());   //return ordered or sorted array in lexagraphical order | alphabetical order
console.log(slice1); // return from index 1 (Dubai) to index 3 (Swizerland). index 4 is exclusive
console.log(slice2); // return last element
console.log(slice3); // return from index 1 to 4

