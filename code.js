let num1 = null;
let num2 = null;
let sum = 0;
operator = null;
let key = '';

const display = document.querySelector('#display');
const page = document.querySelector('body');
page.addEventListener('keydown', (e) => {
    if (e.shiftKey === true) {
            switch (e.code) {
                case ('Digit5'):
                    key = 'percent'
                    break;
                case ('Digit8'):
                    key = 'Asterisk'
                    break;
                case ('Equal'):
                    key = 'Plus'
                    break;
            }
    }
    else {
        key = e.code
    }
    console.log(e)
    document.querySelector(`#${key}`).click()
    key = ''
})

const buttons = document.querySelectorAll('button');

const decimal = document.querySelector('#Period');

const clear = document.querySelector('#AC');
clear.addEventListener('click', () => {
    reset();
    sum = 0;
    display.textContent = '';
});

const del = document.querySelector('#Backspace');
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

const equals = document.querySelector('#Equal');
equals.addEventListener('click', () => {
    if (num1 !== null && num2 !== null) {
        display.textContent = calculate(operator);
    }
    else if (num1 !== null && num2 === null) {
        if (display.textContent === '') {
            num2 = num1;
        }
        else {
            num2 = +display.textContent;
        }
        display.textContent = calculate(operator);
        decimal.disabled = false;
    }
    else if (num1 === null && num2 === null) {
        display.textContent = display.textContent;
        reset();
    }
})

buttons.forEach((button) => {
    if (button.classList.contains('number')) {
        button.addEventListener('click', () => {
            if (button.textContent.includes('.')) {
                button.disabled = true;
            }
            display.textContent += button.textContent;
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
            decimal.disabled = false;
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
    reset()
    return sum;
}

function subtract(x, y) {
    sum = x - y;
    reset()
    return sum;
}

function multiply(x, y) {
    sum = x * y;
    reset()
    return sum;
}

function divide(x, y) {
    sum = x / y;
    reset()
    return sum;
}


function reset() {
    num1 = null;
    num2 = null;
    operator = null;
    decimal.disabled = false;
}
