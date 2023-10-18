let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const inputNumber = document.querySelector("#guessNumber")
const guessSlot = document.querySelector("#guessess")
const remaining = document.querySelector("#remaining")
const showResult = document.querySelector("#finalResult")
const startOver = document.querySelector("#resultPara")

const p = document.createElement('p')

let prevGuess = []
let numOfGuess = 1

let playGame = true

// first check if you are able to play
if(playGame){
    submit.addEventListener("click" , function(e){
    e.preventDefault()
    const guess = parseInt(inputNumber.value)
    // console.log(guess);
    validateGuess(guess)
    })
}

// For validating the number
function validateGuess(guess) {
    if(isNaN(guess)){
        // showResult.innerHTML = 'Please enter a valid number!'
        alert('Please enter a valid number!')
    }
    else if(guess < 1){
        alert('Please enter number greater than 1')
    }
    else if(guess > 100){
        alert('Please enter number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numOfGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// Print some message high or low
function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is Tooo Low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Tooo High`)
    }
}

// DOM manupulate
function displayGuess(guess){
    inputNumber.value = ''
    guessSlot.innerHTML += `${guess} `
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`
}

// display message- DOM manupulate here
function displayMessage(message){
    showResult.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    inputNumber.value = ''
    inputNumber.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numOfGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numOfGuess}` 
        inputNumber.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}