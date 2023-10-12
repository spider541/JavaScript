// when we define outside the scope it is global value

// let a = 10
// const b = 20
// var c = 30

// var c =300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30 // it will still be accessible outside the scope ..we don't use it
    // c = 30 // neither you also.

    // console.log("Inner: ",a); // Inner:  10
}


// console.log(a); // 300
// console.log(b); // can't acces bcz of scope :)
// console.log(c); // 30

//================ More on Scope ==================

function one() {
    const username = "rohit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // parents will not take childs ice cream

    two()
}

// one(); // rohit

if(true){
    const username = "rohit"
    if (username === "rohit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error
}

// console.log(username); // error

// ++++++++++++++++++ interesting ++++++++++++++++++++++++

console.log(addOne(5)) // we can access addOne function anywhere.

function addOne (num){
    return num + 1;
}
// console.log(addOne(5))

// Hoisting will be discuss latter ...for now it is how to declare a functions.

// console.log(addTwo(5)) // Cannot access 'addTwo' before initialization 
const addTwo = function (num){
    return num + 2
}

console.log(addTwo(5)) 