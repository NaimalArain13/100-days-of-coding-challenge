// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
//make an array of grades
var grades = [87, 79, 89, 97, 95];
//defining average by using reduce function that store the sum of each item in "grades" in "total" and after reducing it, divide it with the length of the grades
var average = grades.reduce(function (total, grades) { return total + grades; }, 0) / grades.length;
//show the average
console.log(average);
//Same task has been done using for of loop
var sum = 0;
for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
    var grade = grades_1[_i];
    sum += grade;
}
var Average = sum / grades.length;
