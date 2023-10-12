// const tinderUser = new Object() // singleton object

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        userFullName : {
            firstNmae : "Rohit",
            lastName : "Servia"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstNmae);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4) // marge two object
const obj3 = {...obj1, ...obj2} // using spread technique
// console.log(obj3);


const user = [
    {
       id : 1,
       email : "huser@gmail.com" 
    },
    {
       id : 1,
       email : "huser@gmail.com" 
    },
    {
       id : 1,
       email : "huser@gmail.com" 
    },
    {
       id : 1,
       email : "huser@gmail.com" 
    },
    {
       id : 1,
       email : "huser@gmail.com" 
    },
]

// console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] return in an array
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true