// Question 31: No Users: Ensure your user list isn’t empty.

// Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.


let user_names: string[] = []; 
// let user_names: string[] = ["Sara" ,"Zara"]; 


// • If the list is empty, print the message We need to find some users!
if(user_names.length === 0){
    console.log("We need to find some users");
}else{
    user_names.forEach(user =>{
        console.log(`Hello ${user}`)
    })
}
// • Remove all of the usernames from your array, and make sure the correct message is printed. 