// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface StudentTemplate  {
    name: string,
    age: number,
    classes: string[]
}

let exampleStudent:StudentTemplate = {
    name: "Naimal",
    age: 22,
    classes: ["GIAIC", "Maths", "AI"]
}

console.log(exampleStudent);
