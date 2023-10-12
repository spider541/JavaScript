// for of loop specially for array

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == ' '){
        continue // Just avoid the space. 
    }
    // console.log(`Each character is ${greet}`);
}
//=====================================================================================
// Learning basic of Map
// map is a object that contains unique values

const myMap = new Map()

myMap.set("IN" , "India")
myMap.set("USA" , "United States Of America")
myMap.set("FR" , "France")
myMap.set("IN" , "India") // same key will not effect just updated the element 

// console.log(myMap);

// running loop in map
// map's are itterable but object's are not

for (const key of myMap) {
    // console.log(key);
}
// Output - 
// [ 'IN', 'India' ]
// [ 'USA', 'United States Of America' ]
// [ 'FR', 'France' ]

for (const [key , value] of myMap) {
    // console.log(key, ":-", value);
}

// There is other way to itterate objects
let myObject = {
    game1 : "NFS",
    game2 : "FIFA14"
}

// for (const [key , value] of myObject) {
//     // console.log(key, ":-", value); //TypeError: myObject is not iterable
// }


