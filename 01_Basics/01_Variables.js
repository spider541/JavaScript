// LEARNING DIFFERENT WAY TO DEFINE VARIABLES

const accountId = 101
let accountEmail = "rohit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 112233   We can't assign value to a constant file
// console.log(accountId) for showing anything we use this command

accountEmail = "hell@devil.com"
accountPassword = "223344"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* Highly recomended to use only const and let for declaring variables
    because of issue in block scope and functional scope
*/



