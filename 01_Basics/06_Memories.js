// Memories in JavaScript

// stack(Primitive)= give a copy of original reference   Heap(Non-primitive)= give direct reference/address of memory

let myYoutube = "slowcoder"

let anotherYoutube = myYoutube
anotherYoutube = "fastCoder"

console.log(anotherYoutube);
console.log(myYoutube);



// Example of Heap memory that gives the original memory address
let userOne = {
    email:"user@gmail.com",
    upiId:"user@ybl"
}

let userTwo = userOne

userTwo.email = "user1@google.com"

console.log(userTwo.email);
console.log(userOne.email);