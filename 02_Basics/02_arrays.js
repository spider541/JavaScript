const marvel_heros = ["IronMan", "Thor", "SpiderMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// let allHerros = marvel_heros.concat(dc_heros)
// console.log(allHerros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // Thi is called spread
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity) // defining the layer.. infinity is safe played.
// console.log(real_another_array);

// console.log(Array.isArray("Rohit")) // false = check the passing value is array type or not.
console.log(Array.from("Rohit")) // [ 'R', 'o', 'h', 'i', 't' ], making it to an array
console.log(Array.from({name:"Rohit"})) // [] ,empty array define first in project we will do


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]