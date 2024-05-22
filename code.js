let num1 = 0;
let num2 = 0;
let sum = 0;
operator = null;

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button') 

buttons.forEach((button) => {
    if (button.classList.contains('number')) {
        button.addEventListener('click', () => {
            display.textContent += button.textContent;
            if (button.textContent.includes('.')) {
                button.disabled = true;
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
            return (num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function add(x, y) {
    num1 = 0;
    num2 = 0;
    return x + y;
}

function subtract(x, y) {
    num1 = 0;
    num2 = 0;
    return x - y;
}

function multiply(x, y) {
    num1 = 0;
    num2 = 0;
    return x * y;
}

function divide(x, y) {
    num1 = 0;
    num2 = 0;
    return x / y;
}