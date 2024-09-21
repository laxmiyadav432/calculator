const display = document.querySelector('.abc'); 
const buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput; 
            } catch (error) {
                display.textContent = 'Error'; 
            }
        } else if (value === 'Clear') {
            currentInput = '';
            display.textContent = '0';
        } else {
            if (display.textContent === '0') {
                currentInput = value; 
            } else {
                currentInput += value; 
            }
            display.textContent = currentInput;
        }
    });
});

