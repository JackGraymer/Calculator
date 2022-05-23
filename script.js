let operation ;

function solution() {
    result = operation(a,b)
    screenValue = Math.round(result * 100) / 100;
    updateBottomScreen(screenValue)
}

function sum (a, b){ //Sum of 2 numbers
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

function updateBottomScreen(val = screenValue) {
    document.querySelector('.screenBottom').textContent = val;
}
/* let screenValue = document.querySelector('.screenBottom'); */

let screenStage = document.querySelector('.screenTop');

let digits = document.querySelectorAll('.digit');

let operators = document.querySelectorAll('.operator');

let a = '';
let b = '';
let result = '';
//Writing in the screen with calculator number buttons

let screenValue = document.querySelector('.screenBottom').textContent;

digits.forEach(digit => { digit.addEventListener('click', () => {
    if (b !== ''){
        clear();
    }
    screenValue = screenValue + event.target.textContent
    updateBottomScreen();
    console.log(screenValue)
})})

//Operator buttons set screen value to A and chose an operation

operators.forEach(operator => { operator.addEventListener('click', () => {
    a = Number(screenValue)
    console.log(a)
    b = '';
    screenValue = '';
    screenStage.textContent = a + ' ' + event.target.id;
    /* if (event.target.id === '+'){
        console.log('fuck yeah')
        operation = substract
        console.log(operation(a,b));
    } */
    switch(event.target.id){
        case'+':
            operation = sum;
            break;
        case '-':
            operation = substract;
            break;
        case '*':
            operation = multiply;
            break;
        case '/':
            operation = divide
            break
    }
    })
})

// Equal button to calculate the solution of the operation and show the result on screen
document.querySelector('#equal').addEventListener('click', () => {
    if (a !== ''){
    b = Number(screenValue);
    screenStage.textContent = screenStage.textContent + ' ' + b
    console.log('working?')
    solution();
    a = '';
}
})

//Clear button cleans screens and all stored data variables

document.querySelector('#clear').addEventListener('click', clear)
function clear() {
    a = '';
    b = '';
    result = '';
    screenValue = '';
    updateBottomScreen();
    screenStage.textContent = '';
    //document.querySelector('.screenTop').textContent = '';
    return;
}

//Delete / return button deletes the top right / lattest number on screen

document.querySelector('#back').addEventListener('click', () => {
    screenValue = screenValue.slice(0, -1)
    document.querySelector('.screenBottom').textContent = screenValue
    //console.log('deleteworsks')
})

