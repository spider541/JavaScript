const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator , currentvalue) {
//     console.log(`acc: ${accumulator} and curval: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0) // here define initial value

// console.log(myTotal);

// Try to write it in arrow function

const AnothermyTotal = myNums.reduce( (acc, crvl) => acc + crvl, 0 )

// console.log(AnothermyTotal);

const mySoppingChart = [
    {
        itemName: 'Js Course',
        price: 2999
    },
    {
        itemName: 'py Course',
        price: 999
    },
    {
        itemName: 'Data Science Course',
        price: 12999
    },
]

let totalPrice = mySoppingChart.reduce( (acc , item) => acc + item.price, 0 )

// console.log(totalPrice);
