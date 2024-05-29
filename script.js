function add(firstNum, secondNum) {
    return parseFloat(firstNum) + parseFloat(secondNum);
}

function subtract (firstNum, secondNum) {
    return parseFloat(firstNum) - parseFloat(secondNum);
}

function multiply (firstNum, secondNum) {
    return parseFloat(firstNum) * parseFloat(secondNum);
}

function divide (firstNum, secondNum) {
    if (parseFloat(firstNum) === 0 || parseFloat(secondNum) === 0) {
        alert("Cannot divide by 0");
        return 0;
    } else {
        return parseFloat(firstNum) / parseFloat(secondNum);
    }
}

function operate() {
    let returnValue = 0;

    console.log(`before: ${operator} ${firstNum} ${secondNum}`)

    let firstOperatedNum = 0;

    // If we have a total (ex: we've operated before), use the total as our first number
    // else use the inputted first number
    if (currentTotal !== 0) {
        firstOperatedNum = currentTotal;
    } else {
        firstOperatedNum = firstNum;
    }

    if (operator === "add") {
        returnValue = add(firstOperatedNum, secondNum);
    } else if (operator === "subtract") {
        returnValue = subtract(firstOperatedNum, secondNum);
    } else if (operator === "multiply") {
        returnValue = multiply(firstOperatedNum, secondNum);
    } else if (operator === "divide") {
        returnValue = divide(firstOperatedNum, secondNum);
    } else {
        alert("Unknown operator");
        return;
    }
    
    currentTotal = returnValue;

    // Only shows decimal places if the number isnt whole
    // Also makes sure to remove trailing 0s
    if (currentTotal % 1 !== 0) {
        currentTotal = currentTotal.toFixed(4);
        currentTotal = parseFloat(currentTotal);
    }

    setDisplay(`${firstOperatedNum} ${getOperatorSymbol(operator)} ${secondNum} = ${currentTotal}`)

    operator = "none";
    secondNum = 0;

    console.log(`after: ${operator} ${firstOperatedNum} ${secondNum}`)

    return returnValue;
}

function clear() {
    currentTotal = 0;
    firstNum = 0;
    secondNum = 0;
    operator = "none";

    clearDisplay();
}

function updateDisplay(textToAdd) {
    if (displayField.textContent === "0") {
        displayField.textContent = textToAdd;
    } else {
        displayField.textContent += textToAdd;
    }
}

function clearDisplay() {
    displayField.textContent = "0";
}

function setDisplay(text) {
    displayField.textContent = text;
}

function setNum(inputNum) {
    if (operator === "none" && !hasOperatedBefore) {
        firstNum = parseFloat(firstNum.toString() + inputNum.toString());
    } else {
        secondNum = parseFloat(secondNum.toString() + inputNum.toString());
    }

    updateDisplay(inputNum);
}

function setOperator(newOperator) {
    if (operator !== "none") {
        operate();
        setOperator(newOperator);
    }

    operator = newOperator;

    updateDisplay(` ${getOperatorSymbol()} `);
}

function getOperatorSymbol() {
    switch (operator) {
        case "add":
            return "+";
        case "subtract":
            return "-";
        case "multiply":
            return "*";
        case "divide":
            return "/";
        default:
            return "";
    }
}

let firstNum = 0;
let secondNum = 0;
let operator = "none";

let currentTotal = 0;

let hasOperatedBefore = false;

// Display fields
const displayField = document.querySelector("#calculator-display");

// Calculator buttons
const clearButton = document.querySelector("#clearButton");

const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");

const oneButton = document.querySelector("#oneButton");
const twoButton = document.querySelector("#twoButton");
const threeButton = document.querySelector("#threeButton");
const fourButton = document.querySelector("#fourButton");
const fiveButton = document.querySelector("#fiveButton");
const sixButton = document.querySelector("#sixButton");
const sevenButton = document.querySelector("#sevenButton");
const eightButton = document.querySelector("#eightButton");
const nineButton = document.querySelector("#nineButton");
const zeroButton = document.querySelector("#zeroButton");

const decimalButton = document.querySelector("#decimalButton");

const equalsButton = document.querySelector("#equalsButton");

// Calculator button function setup
clearButton.addEventListener("click", (e) => {
    clear();
});

addButton.addEventListener("click", (e) => {
    setOperator("add");
});
subtractButton.addEventListener("click", (e) => {
    setOperator("subtract");
});
multiplyButton.addEventListener("click", (e) => {
    setOperator("multiply");
});
divideButton.addEventListener("click", (e) => {
    setOperator("divide");
});

oneButton.addEventListener("click", (e) => {
    setNum(1);
});
twoButton.addEventListener("click", (e) => {
    setNum(2);
});
threeButton.addEventListener("click", (e) => {
    setNum(3);
});
fourButton.addEventListener("click", (e) => {
    setNum(4);
});
fiveButton.addEventListener("click", (e) => {
    setNum(5);
});
sixButton.addEventListener("click", (e) => {
    setNum(6);
});
sevenButton.addEventListener("click", (e) => {
    setNum(7);
});
eightButton.addEventListener("click", (e) => {
    setNum(8);
});
nineButton.addEventListener("click", (e) => {
    setNum(9);
});
zeroButton.addEventListener("click", (e) => {
    setNum(0);
});

equalsButton.addEventListener("click", (e) => {
    operate();
});

// Keyboard support
document.addEventListener("keyup", (e) => {
    switch (e.code) {
        case "Numpad1":
        case "Digit1":
            setNum(1);
            break;
        case "Numpad2":
        case "Digit2":
            setNum(2);
            break;
        case "Numpad3":
        case "Digit3":
            setNum(3);
            break;
        case "Numpad4":
        case "Digit4":
            setNum(4);
            break;
        case "Numpad5":
        case "Digit5":
            setNum(5);
            break;
        case "Numpad6":
        case "Digit6":
            setNum(6);
            break;
        case "Numpad7":
        case "Digit7":
            setNum(7);
            break;
        case "Numpad8":
        case "Digit8":
            setNum(8);
            break;
        case "Numpad9":
        case "Digit9":
            setNum(9);
            break;
        case "Numpad0":
        case "Digit0":
            setNum(0);
            break;
        case "Equal":
        case "Enter":
            operate();
            break;
        case "Minus":
        case "NumpadSubtract":
            setOperator("subtract");
            break;
        case "NumpadAdd":
            setOperator("add");
            break;
        case "NumpadMultiply":
            setOperator("multiply");
            break;
        case "Slash":
        case "NumpadDivide":
            setOperator("divide");
            break;
        default:
            break;
    }
});

// initial setup
clear();