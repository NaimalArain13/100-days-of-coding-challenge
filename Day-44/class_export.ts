// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
export class person  {
    name = "naimal";
    age = 22;
    constructor(name : string , age : number){
        this.name  = name
        this.age = age
    }
}
