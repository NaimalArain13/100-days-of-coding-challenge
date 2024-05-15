// TYPE ASSERTIONS

let data: any = "1000";
let fName: unknown = "Naimal";

// Type assertion to treat "data" as a string
console.log((fName as string).repeat(3));
console.log((data as string).repeat(3));
