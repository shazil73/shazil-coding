const dislay = document.querySelector('.display');
const numberbuttons = document.querySelectorAll('.number');
const operatorbuttons = document.querySelectorAll('.operator');

let currentInput = '';
let previousInput = '';
let operator = 'null';

function updateDisplay(value) {
    dislay.textContent = value | '0'
}

numberbuttons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput = currentInput + button.id
        updateDisplay(currentInput)
    })
})

operatorbuttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id
        switch (id) {
            case 'clear':
                currentInput = '';
                previousInput = '';
                operator = null;
                updateDisplay('');
                break;
}})
    })                