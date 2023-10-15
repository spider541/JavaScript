const coding = ["JS", "C++", "Python", "Java"]


// Defination of foreach
// array.forEach(element => {
    
// });


// coding.forEach(function (key){           // This is a call by function.
//     console.log(key);
// })

// coding.forEach( (element) => {
//     console.log(element);
// });


// Best way to explain call by function

function printMe(item){  
    console.log(item);
}

// coding.forEach(printMe); // Just give the function reference don't execute.

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCodding = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCodding.forEach( (item) => {
    console.log(item.languageFileName);
})

// for (const iterator of myCodding) {
//     console.log(iterator.languageFileName);
// }

// for (const key in myCodding) {
//     console.log(myCodding[key].languageFileName);
// }