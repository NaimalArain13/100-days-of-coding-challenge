//Class Accessors
//Setter (allows you to set a value of the property with extra logic and validation).
//Getter (allows you to retrieve the value of the property).

class Person {
  private _age: number | undefined;

  constructor(public name: string, public hobbies: string[])
  {}

  //Defining Setter for the value of age property
  public set age(age: number) {
    if (age > 150 || age < 0) {
      throw new Error("The age is not valid");
    }
    this._age = age;
  }
  //Defining Getter to retrieve the value of age property
  public get age():number{
    if(this._age === undefined){
      throw new Error("The age is not defined");
  }
  return this._age 
}

//Defining a method
  introduceParent(): string {
    return `I am ${this.name}, a ${
      this.age
    } years old individual. My hobbies are ${this.hobbies.join(",")}`;
  }
}

const person2 = new Person("naimal", [" coding", "eating", "dancing"]);
person2.age = 12
console.log(person2.age);
// console.log(person2.age = 512);  This will throw an error "the age is not valid because we have applied setter method"

