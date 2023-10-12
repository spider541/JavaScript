// singleton - when made by any costructor 
//Object.create -----------  new Oject()


// Object literals
// It can take any thing in key and value pair

const mySym = Symbol("Key1")
// console.log(typeof mySym);
// console.log(mySym);

const JsUser = {
    name: "Rohit", // by default name is treated as object
    "full name": "Rohit Servai",
    [mySym] : "myKey1", // This is how we use symbol in object
    age: 27,
    location:"Kolkata",
    email:"rohit.google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] //
}

// Access Object

// console.log(JsUser.email);
// console.log(JsUser["email"]); // another way to access the object
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym]);
// console.log(JsUser);

// manupulate object data

// JsUser.email = "rohit@facebook.com"
// Object.freeze(JsUser); // Not modify the object 
// JsUser.email = "rohit@microsoft.com"
// console.log(JsUser);

// Define function

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); // Using this keyword explain in functon.
}

JsUser.greeting();
JsUser.greetingTwo();

// console.log(JsUser.greeting()); // Hello Js User | undefined
// console.log(JsUser.greeting); // [Function (anonymous)]
// console.log(JsUser.greetingTwo());