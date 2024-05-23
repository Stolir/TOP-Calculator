let num1 = null;
let num2 = null;
let sum = 0;
operator = null;

const display = document.querySelector('#display');

const buttons = document.querySelectorAll('button') ;

const clear = document.querySelector('#AC');
clear.addEventListener('click', reset);

const del = document.querySelector('#del');
del.addEventListener('click', () => {
    display.textContent = Math.floor(+display.textContent / 10)
})

const changeSign = document.querySelector('#changesign');
changeSign.addEventListener('click', () => {
    display.textContent = -display.textContent;
})

const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    display.textContent = +display.textContent / 100;
})

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (num1 !== null && num2 !== null) {
        display.textContent = calculate(operator);
    }
    else if (num2 === null) {
        if (display.textContent === '') {
            num2 = num1;
        }
        else {
            num2 = +display.textContent;
        }
        display.textContent = calculate(operator);
    }
})

buttons.forEach((button) => {
    if (button.classList.contains('number')) {
        button.addEventListener('click', () => {
            display.textContent += button.textContent;
            if (button.textContent.includes('.')) {
                button.disabled = true;
            }
        })
    }
    else if (button.classList.contains('operator')) {
        button.addEventListener('click', () => {
            operator = button.textContent;
            if (num1 === null) {
                num1 = +display.textContent
                display.textContent = '';
            }
            else {
                if (display.textContent === '') {
                    num2 = num1;
                }
                else {
                    num2 = +display.textContent;
                }
                display.textContent = calculate(operator);
            }
        })
    }
})


function calculate(operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*': 
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function add(x, y) {
    sum = x + y;
    num1 = null;
    num2 = null;
    return sum;
}

function subtract(x, y) {
    sum = x - y;
    num1 = null;
    num2 = null;
    return sum;
}

function multiply(x, y) {
    sum = x * y;
    num1 = null;
    num2 = null;
    return sum;
}

function divide(x, y) {
    sum = x / y;
    num1 = null;
    num2 = null;
    return sum;
}

function toPercentage() {
    return x / 100;
}

function reset() {
    let num1 = null;
    let num2 = null;
    let sum = 0;
    operator = null;
    display.textContent = ''
}