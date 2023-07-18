// 1. When a user inputs a number
// 2. Loop from 1 to the entered number
// 3. If the current number is divisible by 3 then print "Fizz"
// 4. If the current number is divisible by 5 then print "Buzz"
// 5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
// 6. Otherwise print the current number


let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) { // (let [pocetna vrijednost i];[condition];[afterthought])  
    if (i % 3 === 0 && i % 5 === 0){  // if u put this last it wont work 
        let i = "fizz buzz";
        console.log(i);
    } else if (i % 3 === 0) {
        let i = "fizz";
        console.log(i)
    } else if (i % 5 === 0){
        let i = "buzz";
        console.log(i);
    }else {
        console.log(i);
    }
}