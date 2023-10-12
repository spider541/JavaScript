// Learning about all string methods

// string concatination

const userName = "Rohit Servai"
const userScore = 101
// console.log(`The user is ${userName} and he score ${userScore}.`);

//========================================================

const string2 = new String("I am a demo string.")

// console.log(string2.length);

// console.log(string2.__proto__); // used to resolve memory wastage of an object

//  console.log(string2.anchor('link')); // creating a html anchor tag but not recommended stop working in modern browser.

// console.log(string2.at(-1)); // return the string byindex number +/- both support

// console.log(string2.charAt(5));  // can't take -ve index
// console.log(string2.charAt(string2.length-1)); // for that we substract it from length

// console.log(string2.charCodeAt(3)); // return utf-16 unicode value of the element
// ===================================================
// concat method
// let fName = "Rohit"
// let sName = "Servai"
// console.log(fName.concat(' ',sName)); 
//======================================================
//const string2 = new String("I am a demo string.")
// console.log(string2.endsWith('string.')); // return in boolean
// console.log(string2.length); // => 19
// console.log(string2.endsWith('string', 18)); // return in boolean, position will be the end value
//=============================================================
// let str1 = "Rohit"
// console.log(str1.charCodeAt(2)); // utf-16 104
// console.log(String.fromCharCode(104)); // utf-16 code units = h

//====================================================
// includes method
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.includes("fox")); // return in true or false
// console.log(sentence.toUpperCase().includes("FOX"));

//const word = 'fox';
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


// ==================================================================
// const string2 = new String("I am a demo string.")
// console.log(string2.indexOf('string')); // returns the position value if not found then return -1.

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);

// console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, indexOfFirst + 1)}`); // definig position to start from that position

// =========================================================================

// console.log(string2.isWellFormed()); // return in boolean related to encodeURI() for url

//==================================================================

// lastIndexOf()

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';

// console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`); // return in index no from last .

// console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm , 45)}`); // it will search less than the position no.
//============================================================================

// localcompare => compare between the two string and return +ve or -ve value according to their alphabatically position

//========================================
// match()

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

// const regex = /[A-Z]/g; // global flag all match wiil be return in an arry form
// const regex1 = /[A-Z]/; // only the first match will return
// const regex2 = /[A-Z]/gi; // return everythng, i = ignore upper or lower

// const found = paragraph.match(regex);
// const found1 = paragraph.match(regex1);
// const found2 = paragraph.match(regex2);

// console.log(found);
// console.log(found1);
// console.log(found2);

//==================================================

// replace()

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace('dog', 'monkey')); // only replace the first match

// const rgx = /dog/g;
// console.log(p.replace(rgx, 'monkey')); // if I use g = global search then it will replace every match


// const regex = /Dog/i; // i = ignore lower case or upper case 
// console.log(p.replace(regex, 'ferret'));


//===================================================

// replaceAll()

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replaceAll('dog', 'monkey'));

//  Global flag required when calling replaceAll with regex
// const regex = /Dog/gi;
// console.log(p.replaceAll(regex, 'ferret'));

//=======================================================

// search() will return the the index of the first match, global flag not work

// const str = "hey JudE";
// const re = /[A-Z]/;
// const reDot = /[.]/;
// console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
// console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation

//==========================================

// slice return another string.

const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.length); // 44
// console.log(str.slice(31));
// Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

// console.log(str.slice(-4));
// Expected output: "dog."

// console.log(str.slice(-9, -5));
// Expected output: "lazy"

// console.log(str.slice(4, -5)); // quick brown fox jumps over the lazy

// console.log(str.slice(-5));
// console.log(str.slice(0, -5)); // The quick brown fox jumps over the lazy

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// split return an array

const myName = "Rohit-servai-ravan"
console.log(myName.split('-'));

const passage = 'The quick brown fox jumps over the lazy dog.';

const words = passage.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = passage.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = passage.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]