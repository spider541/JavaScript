// Dates

let myDate = new Date();

// console.log(typeof myDate); // Date type is object.

// console.log(myDate); // 2023-10-02T13:14:16.257Z

// console.log(myDate.toString()); // Mon Oct 02 2023 18:44:16 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString()); //2/10/2023, 6:44:16 pm

// console.log(myDate.toDateString()); // ctrl+space to auto suggest //Mon Oct 02 2023

// console.log(myDate.toTimeString()); //18:50:36 GMT+0530 (India Standard Time)

// console.log(myDate.toISOString()); // 2023-10-02T13:14:16.257Z

// console.log(myDate.toJSON()); //2023-10-02T13:14:16.257Z

// console.log(myDate.toLocaleDateString()); //2/10/2023

// console.log(myDate.toLocaleTimeString()); //6:44:16 pm

// console.log(myDate.toUTCString()); //Mon, 02 Oct 2023 13:21:04 GMT

// console.log(myDate.getTimezoneOffset()); //-330



// given an aribitary date

// let myCeatedDate = new Date(2023 , 9, 2)
// console.log(myCeatedDate.toDateString()); // Mon Oct 02 2023

// let myCeatedDate = new Date(2023 , 9, 2, 5, 3)
// console.log(myCeatedDate.toLocaleString()); // 2/10/2023, 5:03:00 am

// let myCeatedDate = new Date("2023-10-02") // 2/10/2023, 5:30:00 am
let myCeatedDate = new Date("10-02-2023") // 2/10/2023, 12:00:00 am
// console.log(myCeatedDate.toLocaleString());

let myTimeStamp = Date.now() // 1696254056044 mili second from 01-01-1970 to todays date
// console.log(myTimeStamp);
// console.log(myCeatedDate.getTime()); //1696185000000

// console.log(Math.floor(Date.now()/ 1000)); // convert to seconds.


let newDate = new Date()
// newDate. and will get all the suggestoin
// console.log(newDate.getDay()); // 1 bcz moday=1 and so on.
// console.log(newDate.getMonth() + 1); // count start form 0.
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))