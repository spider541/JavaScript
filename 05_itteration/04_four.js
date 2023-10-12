let myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'ruby',
    cpp: 'C++'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    // console.log(key);
}

const programming = ["js", "py", "c", "java"]

for (const key in programming) {
    // console.log(key); // It will print the array keys = index no bydefault
    // console.log(programming[key]); 
}

const myMap = new Map()

myMap.set("IN" , "India")
myMap.set("USA" , "United States Of America")
myMap.set("FR" , "France")
myMap.set("IN" , "India")

for (const key in myMap) { // use forof
 console.log(key); // no output , itteration this way not possible.
}
