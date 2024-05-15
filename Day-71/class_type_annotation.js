"use strict";
//Class Type Annotation
class Product {
    constructor(id, name, price) {
        (this.id = id), (this.name = name), (this.price = price);
    }
    detProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}
let product1 = new Product(1, "Naimal", 40);
console.log(product1);
