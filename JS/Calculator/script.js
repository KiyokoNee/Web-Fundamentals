let operator = null;
let firstNumber = null;
let overwriteDisplay = true;

function press(num) {
    if(overwriteDisplay){
        display.innerText = num;
        overwriteDisplay = false;
    } else {
        display.innerText += num;
    }
}

function clr() {
    display.innerText = 0;
    operator = null;
}

function setOP(op) {
    console.log(op);
    firstNumber = display.innerText;
    operator = op;
    overwriteDisplay = true;
}

function calculate() {
    switch (operator) {
        case '*':
            display.innerText = Number(firstNumber) * Number(display.innerText);
            break;
        case '/':
            display.innerText = Number(firstNumber) / Number(display.innerText);
            break;
        case '-':
            display.innerText = Number(firstNumber) - Number(display.innerText);
            break;
        case '+':
            display.innerText = Number(firstNumber) + Number(display.innerText);
            break;
        default:
            break;
    }
    overwriteDisplay = true;
}