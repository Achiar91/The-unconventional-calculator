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

function sum() {
    const enteredValue = getUserInputNumber();
    const initialResult = currentResult;
    currentResult += enteredValue;
    createDescription("+", initialResult, enteredValue);
    writeToLog("sum", initialResult, enteredValue, currentResult);
}
function substract() {
    const enteredValue = getUserInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredValue;
    createDescription("-", initialResult, enteredValue);
    writeToLog("substract", initialResult, enteredValue, currentResult);
}

function multiply() {
    const enteredValue = getUserInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredValue;
    createDescription("*", initialResult, enteredValue);
    writeToLog("multiply", initialResult, enteredValue, currentResult);
}
function divide() {
    const enteredValue = getUserInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredValue;
    createDescription("/", initialResult, enteredValue);
    writeToLog("divide", initialResult, enteredValue, currentResult);
}

addBtn.addEventListener("click", sum);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
