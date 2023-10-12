// Learning  about Arrow function and this keyword.

const user = {
    username: "rohit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to JavaScript.`); // this refer to the current context.

        console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); //{} == when we are node enviroment we get empty current context. But for windows/google we get many details.



function sutta(){
    let username = "rohit"
    console.log(this); // we get many details
    console.log(this.username); // undefined = only work in objects
}

// sutta() // undefined

// const Anothersutta = function () {
//     let username = "rohit"
//     console.log(this.username);
// }
// Anothersutta() //undefined

//===============================================================================================

// This is how we define arrow function

const Newsutta =  () => {
    let username = "rohit"
    console.log(this.username); // undefined
    console.log(this); // {}
}
// Newsutta() //undefined

//++++++++++++++++++++++++++ More about arrow function +++++++++++++++++++++++++++
// Basic arrow function

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))

// Implicit return

// const addTwo = (num1 , num2) =>  num1 + num2 // no need to write return in here
// const addTwo = (num1 , num2) =>  (num1 + num2 )
const addTwo = (num1 , num2) =>   ({username: "rohit", age: 27})
    
console.log(addTwo(3,4))

