let currentNumber = "";
let savedNumber = "";
let operator = "";

function press(num) {
    currentNumber += num;
    display.innerText = currentNumber;
}

function clr() {
    display.innerText = "0";
    currentNumber = "";
    savedNumber = "";
    operator = "";
}

function setOP(op) {
    operator = op;
    savedNumber = currentNumber;
    currentNumber = "";
}

function calculate() {
    let current = Number(currentNumber);
    let saved = Number(savedNumber);

    switch (operator) {
        case '*':
            currentNumber = saved * current;
            break;
        case '/':
            currentNumber = saved / current;
            break;
        case '+':
            currentNumber = saved + current;
            break;
        case '-':
            currentNumber = saved - current;
            break;
    }
    operator = "";
    display.innerText = currentNumber;
}