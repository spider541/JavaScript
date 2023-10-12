const name = "Rohit"
const repoCount = 50

// console.log(name + repoCount + "value"); // not recomended now a days - outdated

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare string

const gameName = new String('RohitS');
// go to google console and run this the out will be key value pair not array.

// console.log(gameName);
// console.log(gameName[3]);
// console.log(gameName.__proto__); // {}
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0, 3);
// console.log(newStr);
const anotherStr = gameName.slice(0, -2);
// console.log(anotherStr);

const newStringOne = "    Rohit    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // Trim function remove the white space and newline

const url = "https://rohit.com/rohit%20servai"

// console.log(url.replace('%20' , '-'))

// console.log(url.includes('sundar'))

const userName = "Rohit-servai-ravan"
console.log(userName.split('-'));