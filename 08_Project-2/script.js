const form = document.querySelector("form")
// Form action is get/post we need to first stop that action
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault() // stop form action

    // There has a diff. b/w parseint and number.
    // const height = parseInt(document.querySelector('#height').value , 10) // convert string to int
    const height = Number(document.querySelector('#height').value) // convert string to int
    // const weight = parseInt(document.querySelector('#weight').value , 10) // convert string to int
    const weight = Number(document.querySelector('#weight').value) // convert string to int

    const result = document.querySelector("#result")

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height= ${height}`
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight= ${weight}`
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        // show the result
        result.innerHTML = `<span>${bmi}</span>`

        // Text shoown in next line
        const br = document.createElement('br')
        result.appendChild(br)
        
        if(bmi < 18.6){
            const text = document.createTextNode("You are Under Weight")
            result.appendChild(text)
        }
        else if(bmi > 18.6 && bmi < 24.9){
            const text = document.createTextNode("You are Normal weight")
            result.appendChild(text)
            
        }
        else{
            const text = document.createTextNode("You are Over Weight")
            result.appendChild(text)
            
        }
    }


})