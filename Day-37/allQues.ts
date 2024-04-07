// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

// Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.
function morningGreeting(){
    let time  = new Date()
    if(time.getHours() < 12){
        console.log("Good Morning");  
    }else {
        console.log("Good Evening");
        
    }
}
// morningGreeting()


// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.
function grades(score: number){
    if(score >= 81 || score >= 100){
        console.log("A") 
    }
    else if(score == 71 || score >= 80){
        console.log("B")
    }
    else if(score == 61 || score >= 70){
        console.log("C") 
    }
    else if(score == 51 || score >= 60){
        console.log("D") 
    }
    else if(score == 41 || score >= 50){
        console.log("F") 
    }else { 
        console.log("Work Hard")
    }
}
// grades(83)


// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
function ageGroup(age : number){
    if(age < 13){
        return "You are CHILD"
    }
    else if(age == 13 || age  <= 19){
        return "You are  TEENAGER"
    }
    else if(age >= 20){
        return "You are an ADULT"
    }
}
console.log(ageGroup(23));
console.log(ageGroup(18));
