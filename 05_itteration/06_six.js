// filter, map and reduce

// const coding = ["JS", "C++", "Python", "Java"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// foreach doesn't return anything.

// console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter is a call back function and return in array and always give condition to it.
// because it works on true or false concept.

const newNumbers = myNum.filter( (num) => num > 4)

// const newNumbers = myNum.filter( (num) => {
    //     return num > 4})
    
// console.log(newNumbers);

// If used foreach

let newNum = []

myNum.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
})

// console.log(newNum);

