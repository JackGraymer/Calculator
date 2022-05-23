let sum = function (a, b){ //Sum of 2 numbers
    return a + b;
}

function substract(a, b){//Substraction of 2 numbers
    return a - b;
}

function multiply(a, b){//multiplication of 2 numbers
    return a * b;
}

function divide(a, b){//Division of 2 numbers
    return a / b;
}

/* let screenValue = document.querySelector('.screenBottom'); */

let screenStage = document.querySelector('.screenTop').textContent;

let digits = document.querySelectorAll('.digit');

let operators = document.querySelectorAll('.operator');

let a = 0;
let b = 0;

//Writing in the screen with calculator number buttons

let screenValue = document.querySelector('.screenBottom').textContent;
//document.querySelector('.screenBottom').textContent = screenValue;

digits.forEach(digit => { digit.addEventListener('click', () => {
    screenValue = screenValue + event.target.textContent
    document.querySelector('.screenBottom').textContent = screenValue
    console.log(screenValue)
})})

//Operator buttons set screen value to A and chose an operation

operators.forEach(operator => { operator.addEventListener('click', () => {
    a = Number(screenValue)
    console.log(a)
    screenValue = '';

    })
})

//Clear button cleans screens and all stored data variables

document.querySelector('#clear').addEventListener('click', () => {
    a = 0;
    b = 0;
    screenValue = '';
    document.querySelector('.screenBottom').textContent = '';
    screenStage = '';
    document.querySelector('.screenTop').textContent = '';
})

//Delete / return button deletes the top right / lattest number on screen

document.querySelector('#back').addEventListener('click', () => {
    //editedText = text.slice(0, -1)
    console.log('deleteworsks')
})