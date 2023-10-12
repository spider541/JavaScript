// const userEmail = "rohit@google.com"
// const userEmail = ""
const userEmail = []

// if(userEmail){
//     console.log("Got User Email.");
// }else{
//     console.log("Don't have User Email.");
// }

// falsy values
// false, 0, -0, BigInt-0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("This is an Empty arrey.")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("This is an empty object.");
}

/* some comprison
false == 0 , true
false == "", true
0 == "", true
*/


// ==================================================================================

// Nullish Coalescing Operator (??): null undefined

// used to handled null and undefined specially in database

let val1;

// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 10 // 10

val1 = undefined ?? 10 ?? 20 // 10 
console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
