const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserInputNumber() {
    return parseInt(userInput.value);
}

function createDescription(operator, resultbeforeCalc, calcNumber) {
    const calculateDescription = `${resultbeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculateDescription);
}

function writeToLog(operator, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operator,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calcResult(calculationType) {
    const enteredValue = getUserInputNumber();
    if (
        calculationType !== "sum" &&
        calculationType !== "subtract" &&
        calculationType !== "multiply" &&
        calculationType !== "divide" || 
        !enteredValue
    ) {
        return;
    }
    
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "sum") {
        currentResult += enteredValue;
        mathOperator = "+";
    } else if (calculationType === "subtract") {
        mathOperator = "-";
        currentResult -= enteredValue;
    } else if (calculationType === "multiply") {
        mathOperator = "*";
        currentResult *= enteredValue;
    } else if (calculationType === "divide") {
        mathOperator = "/";
        currentResult /= enteredValue;
    }

    createDescription(mathOperator, initialResult, enteredValue);
    writeToLog(calculationType, initialResult, enteredValue, currentResult);
}

function sum() {
    calcResult("sum");
}
function subtract() {
    calcResult("subtract");
}

function multiply() {
    calcResult("multiply");
}
function divide() {
    calcResult("divide");
}

addBtn.addEventListener("click", sum);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
