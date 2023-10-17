const buttons = document.querySelectorAll('.box');
// console.log(buttons); // Node list
const body = document.querySelector("body")

buttons.forEach( (btn) => {
    console.log(btn); // we get all the div's
    //Learning Events
    btn.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        // const color = e.target.id
        // body.style.backgroundColor = color
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id
        }
    })
} )