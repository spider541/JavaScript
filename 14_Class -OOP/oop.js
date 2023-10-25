// Object literals

const user = {
    // variables are called properties same like in array.length
    username: "rohit",
    loginCount: 9,
    signedIn: true,
    // methods
    getUserDetails:function(){
        console.log(`Welcome User`);
        // and for represent current context we use this keyword
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Learning about construction function
// new keyword

// const promiseOne = new Promise()
// const date = new Date()

function User(username , logInCount , isLoggedIn){
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("rohit", 9, true)
const userTwo = new User("javascript", 11, false)
// console.log(userOne);
console.log(userTwo.constructor);
// try to learn instenceof
