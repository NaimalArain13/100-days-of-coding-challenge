// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

//make an array of grades
let grades = [87, 79, 89, 97, 95];

//defining average by using reduce function that store the sum of each item in "grades" in "total" and after reducing it, divide it with the length of the grades
let average = grades.reduce((total , grades) => total + grades, 0) / grades.length;

//show the average
console.log(average);

//Same task has been done using for of loop
let sum = 0;
for(let grade of grades){
    sum += grade
}
let Average:number = sum / grades.length;
