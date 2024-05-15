//Generics

// // A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets ( <> ) following the name of ...
// // Generics in TypeScript allow you to create reusable components that can work with a variety of data types while still maintaining type safety. Here are some examples of generics in TypeScript:

// //Declaring varaibles with a single types
let names: string[];
let ages: number[];
let isPaid: boolean[];

// //Using generics systax but noe in correct manner
const score: Array<number> = [];
const score2: Array<boolean> = [];
const score3: Array<string> = [];

// //Creating multiple identity function that will take specified types.

//you can pass this function either a number or boolean
function identityOne(
  val: number | boolean | string
): number | boolean | string {
  return val;
}

// //you can pass this function either a string or boolean
function identityTwo(val: string | boolean): string | boolean {
  return val;
}

// //you can pass this function either a number or string
function identityThree(val: number | string): number | string {
  return val;
}

// //you can pass this function any type and it will return any type
function identityFour(val: any): any {
  return val;
}

// //this is actually Generic Function
function identityFive<Type>(val: Type): Type {
  return val;
}

function identitySix<T>(val: T): T {
  return val;
}

// //Creating your custom type using type or interface
type person = {
  name: string;
  age: number;
  readonly city: string;
};

// //Using your own type in identity function
function identitySeven<person>(val: person): person {
  return val;
}

let myVar = identitySeven({ name: "Filza", age: 13, city: "Karachi" });
let myVar2 = identitySeven({ name: "Filza", age: 13, height: "hyderbad" });
console.log(myVar);
console.log(myVar2);

// //Two common ways to call genric function

//with strong typing
let invoking = console.log(identitySeven<string>("NAIMAL"));
console.log(identitySeven<number>(23));

// //With type inference
console.log(identitySeven("naimal"));
console.log(identitySeven(true));

type persons = {
  name: string;
  age: number;
  readonly city: string;
};

function identity<T>(val: T): T {
  return val;
}
let obj2 = identity<person>({ name: "Filza", age: 45, city: "KRC" });
let obj = identity<person>({ name: "Filza", age: 45, city: "HYD" });
console.log(obj);
console.log(obj2);

// obj2.city = "lah"  //Cannot assign to 'city' because it is a read-only property.
obj2.name = "Kanwal";
