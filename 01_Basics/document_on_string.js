// MDN documentation about string methods


const sentance = "The quick brown fox jump over the lazy dog."

// string.at()

// console.log(sentance.at(4)); // q
// console.log(sentance.at(-4)); // d
//=============================================================================
// charAt() ==> codePointAt() and fromCodePoint()

// console.log(sentance.charAt()); // by default take 0 as index.
// console.log(sentance.charAt(6)); //i , can't take any -ve value.
//===========================================================================
// charCodeAt() / codePointAt() => return an integer representing utf-16 code unit

// console.log(sentance.charCodeAt(4)); // 113, can't take -ve value.
// console.log(`Character code of ${sentance.charCodeAt(4)} is the value of ${sentance.charAt(4)}`);
//================================================================================
// concat()

// const str1 = "Hello"
// const str2 = "World!"
// console.log(str1.concat(" ",str2));
//===============================================================
// endsWith() / startsWith() => return in true/false also take end position

const str = "Dog's are the best!"
// console.log(str.endsWith("best!")); // true
// console.log(str.endsWith("the", 13)); // position should be the last index no.

// console.log(str.startsWith("are" , 6)) // true;


//=============================================================================


// **** String.fromCharCode() => is not a function it is a static method. returns string created from utf-16 code unit.

// console.log(sentance.charCodeAt(4)); // 113

// console.log(`char code at index 4 is ${sentance.charCodeAt(4)} and the character is ${String.fromCharCode(113)}`);
//===================================================================================
// includes(string , position) => position where to begin with. Case sensitive search return in true/false

// console.log(sentance.length); // 43
// console.log(sentance.includes("fox" , 15)); // true

//==============================================================================

// indexOf(string , position) => search the string and return the index of first occurence. also take position, return index greater or equal to first occuerence that index

const paragraph = "The quick brown fox jumps over the lazy dog. if the dog barked, was it really lazy?"

// console.log(paragraph.indexOf("dog")); // 40
// console.log(paragraph.indexOf("dog" , 41)); // 52

// lastIndexOf(string , position) => position search less than from that index.

// console.log(paragraph.lastIndexOf("dog")); // 52
// console.log(paragraph.lastIndexOf("dog" , 49)); // 40

//=====================================================================================

// match() => regex used and return the matches. and return in Array.
// it can be complicated because of the regex and flags.
const paragraph1 = "The quick brown fox jump over the lazy dog. It barked."


// const regex = /[A-Z]/g // g = global flag
const regex1 =/[A-Z]/
const regex2 = /[A-Z]/gi // i = ignore cases
const found = paragraph1.match(regex1)
// console.log(found); // [ 'T', 'I' ]

//======================================================================================

// padEnd(target length , pad string) and padStart(target length , pad string) => return modified string

const phoneNo = "9081226164"
const first4Digits = phoneNo.slice(0 , 4)
const last4Digits = phoneNo.slice(-4)

const maskedNumber = first4Digits.padEnd(phoneNo.length , "*")
const maskedNumber1 = last4Digits.padStart(phoneNo.length , "*")
// console.log(maskedNumber);
// console.log(maskedNumber1);

//==========================================================================================

// replace() and replaceAll()

const p = "The quick brown fox jumped over the dog. If the dog reacted, was it really lazy?"
// console.log(p.replace("dog" , "elephant")); // only replace the first match.
// console.log(p.replace(/Dog/gi , "elephant")); // we can use regex for globall change

// console.log(p.replaceAll("dog" , "cat")) // better option to replace all.

//=========================================================================================

// search() => return index no of the first match.
// diff b/w indexOf() and search() is search() can take regex. indexOf() doesn't support regex.

const myPara = "The quick brown fox jumped over the dog. If the dog reacted, was it really lazy?"

// console.log(myPara.search("dog"));
// console.log(myPara.search(/Dog/i));

// ===================================================================================

// slice() = extract a section of the string and return it.

const p2 = "The quick brown fox jumps over the lazy dog."

// console.log(p2.slice(31)); // the lazy dog.
// console.log(p2.slice(0 , 31)); // The quick brown fox jumps over
// console.log(p2.slice(-5)); //  dog.
// console.log(p2.slice(0 , -9)); // The quick brown fox jumps over the
// console.log(p2.slice(-6 , -1)); // y dog

// =================================================================================

// split() => takes a pattern and divide the string into that pattern in an array return.

const P3 = "The-quick-brown-fox-jumps-over-the-lazy-dog."
store = P3.split("-" , 3); // limit
// console.log(store);

