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
            case 'backspace':
                currentInput = currentInput.slice(0, -1);
                updateDisplay(currentInput);
                break;
            case 'equals':
                if (previousInput && currentInput && operator) {
                    result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator)
                    updateDisplay(result.toString());
                    currentInput = result.toString();
                    previousInput = '';
                    operator = null;
                }
                break;

            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'sum':
                if (currentInput) {
                    if (previousInput && operator) {
                        result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator)
                        updateDisplay(result.toString());
                        previousInput = result.toString();
                        updateDisplay(result);
                    }
                    else {
                        previousInput = currentInput
                    }
                    currentInput = '';
                    operator = getOperatorSymbol(id);
                }
                break

        }
    })
})

function getOperatorSymbol(id) {
    switch (id) {
        case 'divide':
            return '/';
        case 'multiply':
            return '*';
        case 'subtract':
            return '-';
        case 'sum':
            return '+';
        default:
            return null;
    }}

function calculate(a, b, operator) {
    switch (operator) {
        case '/':
            return a / b;
        case '*':
            return a * b;
        case '-':
            return a - b;
        case '+':
            return a + b;
        default:
            return null;
    }}