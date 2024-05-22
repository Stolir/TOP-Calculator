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


