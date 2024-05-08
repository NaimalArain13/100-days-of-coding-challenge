"use strict";
let article = ["Title One", 11, true]; //definig a tuple
article = ["Title two", 12, false]; //updating a tuple
//printing tuple
console.log(article);
//Destructing a tuple value 
const [title, id, published] = article;
//printing each element of tuple
console.log(title);
console.log(id);
console.log(published);
