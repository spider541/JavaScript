// if

// const score = 200

// if (score < 200) {
//     console.log("Score is less than 200");
// }
// else{
//     console.log("Score is 200.")
// }

// Implicit Sope = one line code

// const balance = 1000

// if(balance > 500) console.log("Executed");

// implicit but in multiple line code.

// if(balance > 500) console.log("Executed"),
// console.log("Hello I am multiple line Implicit scope");

// This is an immature code,  don't write like that.

// ====================================================================

// if (balance < 300){
//     console.log("Less than 300");
// }
// else if(balance < 500){
//     console.log("Less than 500");
// }else if(balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("Balance is 1000 or greater than 1000");
// }

// =======================================================================

const userLoggedIn = true
const HasdebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && HasdebitCard){
    console.log("Allowed for Shopping");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User is logged in.");
}