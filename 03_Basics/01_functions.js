// Function

function myName(){
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t")
}

// myName();

// function addTwoNum(num1 , num2){ // Parameters
//     console.log(num1 + num2)
// }
// addTwoNum(3,4) // arguments
// const result = addTwoNum(3,4)
// console.log("Result: ", result); //Result:  undefined

function addTwoNum(num1 , num2){
    // let result = num1 + num2
    // console.log("Rohit");
    // return result
    // console.log("Rohit"); after return no code will execute

    return num1 + num2
}

const result = addTwoNum(3, 5) // I can use same name bcz this is outside the scope.
// console.log("Result: ",result);


function loginUserMessage(username){
    // for undefined value check value
    // if(username === undefined){
    //     console.log("Please enter a Username");
    //     return;
    // }
// Another way
    if(!username){
        console.log("Please enter a Username");
        return;
    }
    return `${username} just logged in`
}

//  console.log(loginUserMessage("rohit")) // rohit just logged in
// console.log(loginUserMessage()) //Please enter a Username

// =========================================================================================================
function NewloginUserMessage(username = "sam"){ // to avoid undefined and it will over ride if we pass value
    if(!username){
        console.log("Please enter a Username");
        return;
    }
    return `${username} just logged in`
}

// console.log(NewloginUserMessage("rohit"))   // rohit just logged in
// console.log(NewloginUserMessage())  // sam just logged in

//==========================================================================================================

function calculateCartPrice(...num1){ //rest operator to pass multiple value in function
    return num1
}

// console.log(calculateCartPrice(200,300,400,500)) // [ 200, 300, 400, 500 ]

function McalculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(McalculateCartPrice(200,300,400,500)) // [ 400, 500 ] 200 and 300 stored in val1, val2.

const user = {
    username: "rohit",
    price:199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

// Calling function by Set a default objecct.
handleObject({
    username: "sam",
    price: 399
});
// =============== Give array in function ==============
const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // 400
// console.log(returnSecondValue([200, 400, 600, 800])) // same like object
