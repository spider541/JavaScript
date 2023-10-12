const score = 400
// console.log(score);
// go to google console and type Number we will get more details
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)) // 123.9  

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++ Maths ++++++++++++++

// console.log(Math);
// go to google console and type Math we will get more details

// console.log(Math.abs(-4.98)); // change the sign only for -ve
// console.log(Math.round(4.38));
// console.log(Math.ceil(4.38));
// console.log(Math.floor(4.98));
// console.log(Math.min(4, 5, 9 ,2)); // selecting from array
// console.log(Math.max(4, 5, 9 ,2));
// ==========================================
// console.log(Math.random()); // always come bw 0 - 1 and in decimal.
// console.log(Math.random()*10); // making it in >0.
// console.log((Math.random()*10) + 1); // 0 - 1 maybe 0.04,0.06 after *10 0.4,0.6 to avoid it +1
// console.log(Math.floor((Math.random()*10) + 1)); // using floor and ceil to wrapup a single number.
// console.log(Math.ceil((Math.random()*10) + 1)); // using floor and ceil to wrapup a single number.

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// console.log(Math.floor((Math.random() * 10) + 1) + min)