// promise is an object and that's how we make promises and it takes a call back function
const promiseOne = new Promise(function (resolve, reject) {
  // Do an Async tasks
  // DB calls , Cryptography, network
  setTimeout(function () {
    console.log("Async task is complete.");
    resolve(); // This way we connect resolve and then
  }, 1000);
});

// And we need to consume promise , upper function return something that comes in .then()
// we need to connect resolve and .then for that
promiseOne.then(function () {
  console.log("Promise Consumed");
});

// Another Way
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Rohit", email: "ROhit@learning.com" }); // Data passes by resolve
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

// Error handling => .catch() is used for that
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Angela", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  }) // This is call chaining
  .then((username) => {
    console.log(username);
  }) // For handling error
  .catch(function (error) {
    console.log(error);
  }) // and now learn finally()
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// Learning async await. and it can't handle error. for that need to use try and catch

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive; // this is a object and so run like this
    console.log(response);
  } catch (error) {
    // error handling
    console.log(error);
  }
}
consumePromiseFive();

// now learning fetch()

// async function getAlluser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users"); // is a promise
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAlluser();

// Doing this with then and catch

fetch("https://jsonplaceholder.typicode.com/users") // is a promise
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
