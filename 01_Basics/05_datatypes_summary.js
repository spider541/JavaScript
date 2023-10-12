// JS is dynamically typed language : not required to define data types before assign values in a variable.

// Primitive Data Type

// String, Number, Boolean, null, undefined, symbol, bigint  => call by value

const score = 100
const scoreVale = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id); // Symbol(123)
// console.log(anotherId); // Symbol(123)

// console.log(id == anotherId); // false

// For define large number use 'n' last in that no

let bigNumber = 3333222222223324894283288n
// console.log(typeof bigNumber);
//==================================================================================
// Reference Data Type(Non primitive) =>> every non-primitive data type is object and function is object function/function

// array, objects, functions

//Array but is typeof is object
const heros = ["IronMan", "CaptainAmerica", "Thor"]
// console.log(typeof heros);

// Objecet
let myObj = {
    name: "Rohit",
    age: 27,
    carrier: "Unemployed"
}
// console.log(myObj);

// Function

const myFunction = function(){
    console.log("Hello World");
}

// myFunction();
