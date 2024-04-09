// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

// // Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.
function daysOfWeek(dayNumbers: number): void {
  switch (dayNumbers) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid Number");
  }
}
console.log("DAYS OF THE WEEK");

daysOfWeek(6);
daysOfWeek(8);

// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.
function logSeasons(months : number):void{
    switch(months){
        case 12:
        case 1:
        case 2:
            console.log("Cold Weather");
        break;
        case 3:
        case 4:
        case 5:
            console.log("Cool Breeze");
        break;
            
        case 6:
        case 7:
        case 8:
            console.log("Warm Weather");
        break;
            
        case 9:
        case 10:
        case 11:
            console.log("Fall");
        break;
        default:
            console.log("Invalid Month");
        break;
    }
}

console.log("SEASONS");

logSeasons(4);
logSeasons(13);
logSeasons(8);

// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.

function logDefault(input:any):void{
    switch(input){
        case 3:
            console.log("This is THREE");
        break;
        case 4:
            console.log("This is FOUR");
        break;
        case 5:
            console.log("This is FIVE");
        break;
        default:
            console.log("NaN");
    }
}
console.log("LOG DEFAULT");

logDefault("Naimal");
