let score = "33"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score) // This is how we convert, there are also many function

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let Unumber = "33abc"
let vInNo = Number(Unumber)

// console.log(typeof vInNo); // number
// console.log(vInNo); // retunr NaN = not a number but type return number.

let aNo = null // means not allocated any space in memory
let sNo = Number(aNo) // convert it to 0.

// console.log(typeof sNo); // we can actually don't use semicolon
// console.log(sNo)


let anotherNo = undefined
let conNo = Number(anotherNo)

// console.log(typeof conNo);
// console.log(conNo);

let boolNo = true
let convertNum = Number(boolNo)
// console.log(typeof convertNum);
//console.log(convertNum);

let isLoggedIn = "asxsxa" // 1,0,"","asxsxa"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// "" => false
// "asxsxa" => true

let someNumber = 33
let StringNumber = String(someNumber)
console.log(typeof StringNumber);
console.log(StringNumber);

// ************** Operation ******************

let value = 3
let negValue = -value
// console.log(typeof negValue);
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello"
let str2 = " Rohit"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

// console.log(+true); // 1 but true+ is not supported
// console.log(+""); // 0

// let num1, num2, num3
//  num1 = num2 = num3 = 2 + 2
//  console.log(num2);

// not recomended to use this type of trick code should be clean

let gameCounter = 100
// gameCounter++;
++gameCounter; // prefix and postfix
console.log(gameCounter);