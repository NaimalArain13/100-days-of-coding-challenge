// Question 30: Hello Admin: Greet users differently, especially 'admin'.

// Explain & TIP: Loop through usernames to personalize greetings. This introduces looping and conditional logic together.

let usernames: string[] = ["Natalia" , "Naimal" , "Gulzaib" , "Admin" , "Fuzail"]; 

for(let i = 0; i< usernames.length ; i++){
    // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
        if(usernames[i] === "Admin"){
            console.log("Hello " + usernames[i] + ", would you like to see a status report");
        }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
        else{
            console.log("Hello " + usernames[i] + ", thank you for logging in again");
        }
    }
