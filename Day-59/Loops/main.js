//While Loop
let num = 2
// while(num < 7 ){
//     console.log("while Loop");
//     num++
// }   //this will stop when condition becomes false
while(num < 7) console.log(num++)   //Single line while 


//do-while 
let i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);


//For loop
for(let i = 0 ; i < 6 ; i++){
    console.log("For Loop" , i)
    
}

// Output even numbers in the loop
// Use the for loop to output even numbers from 2 to 10.

for(let i = 2 ; i < 10 ; i++){
    let evenNumber = i % 2 == 0
if(evenNumber){
    console.log(i);
}
}

// Output prime numbers
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.


for (let num = 2; num < 10; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}
