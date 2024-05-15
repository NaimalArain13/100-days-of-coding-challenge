//Abstract Classes
//It allows you to create a blue print of all common properties you want to have in your child classes.
//You can not instantiate an abstract class and it is only used for inheritance purpose.

//Abstract Class
abstract class Shape { 
    constructor( protected color : string){}

    abstract calculateArea(): number;
    abstract displayArea:()=> void;
}

//Child class
class Circle extends Shape{
    
    //inherit properties from abstract class "Shape" and also add child class's specific properties
    constructor(protected color : string , protected radius :number) {
        super(color);
    }

    //inherit calculateArea() method from "Shape" and perform operation
    public calculateArea():number {
        let areaCircle = (Math.PI * this.radius * this.radius).toFixed(2)
        

        return Number(areaCircle)
    }

        //inherit displayArea() method from "Shape" and display calculated area of a Circle

    displayArea: () => void = (): void =>{  
        `This is the ${this.color} Circle with radius ${this.radius}`
    };
}

//Child class
class Rectangle extends Shape{
    
    //inherit properties from abstract class "Shape" and also add child class's specific properties
    constructor(protected color : string , protected height :number , protected width : number) {
    super(color);
}

    //inherit calculateArea() method from "Shape" and perform operation
    public calculateArea(): number {
        return this.height * this.width
    }
    
    //inherit displayArea() method from "Shape" and display calculated area of a Rectangle
    displayArea: () => void = (): void => {
        `This is the ${this.color} Circle with raduis ${this.calculateArea()}`
    };
}

//Creating instances of Child Classes

const circle = new Circle("blue" , 2)
const rectangle = new Rectangle("green" , 4 , 6)

//Performing Operations  
console.log(circle.calculateArea());

//Display Area of Circle 
circle.displayArea()

//Performing Operations 
console.log(rectangle.calculateArea());

// Display Area of Rectangle
circle.displayArea()

