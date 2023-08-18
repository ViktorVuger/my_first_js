
let user='Viktor', age='17',message='Hello World';

console.log(user,age,message);

let userName;
userName = 'John';

let admin;
admin = userName;
console.log(admin);



const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;

console.log(twoDecimalPlaces);


let a = 10;
console.log(a);
console.log(a*9);

let b = 7 * a;
console.log(b);

let max = 57; actual = max - 13;
let percentage = actual/max;

// ======= FUNCTIONS ======= 
const myText = 'I am string';
const myNewText = myText.replace('string','sausage');

console.log(myText);
console.log(myNewText);


const myArray = ['I','love','chocolate','frogs'];
const madeAString = myArray.join(''); //join connects all values in array i one string
console.log(myArray);
console.log(madeAString);

// ======= POKUS ======
const myNumber = Math.floor(Math.random()*3);
console.log(myNumber);

const myTest = myNumber + (Math.floor(Math.random()*10));
console.log(myTest);
//======================

function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
}

hello('Ari');
hello();

// ========== ANONYMOUS FUNCTION ==========

function myFavoriteCar(car) {
    return car + " is my favorite car";
}

console.log(myFavoriteCar('BMW'));

const button = document.querySelector("button");
function greet() {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to meet you!`);
}

window.addEventListener("click", greet);


