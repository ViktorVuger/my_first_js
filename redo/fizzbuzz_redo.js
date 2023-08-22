// 1. When a user inputs a number
const userInputNumber = parseInt(prompt('Enter the number'));

// 2. Loop from 1 to the entered number

for (i=1; i <= userInputNumber; i++){
    if(i%3 === 0 & i%5 === 0){
        console.log("fizzbuzz");
    } else if(i%5 === 0){
        console.log("buzz");
    } else if(i%3 === 0){
        console.log("fizz");
    } else {
        console.log(i);
    }
}
// 3. If the current number is divisible by 3 then print "Fizz"
// 4. If the current number is divisible by 5 then print "Buzz"
// 5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
// 6. Otherwise print the current number



