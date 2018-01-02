function buildButton(number) {
  var button = document.getElementById(buttonName + buttonNumber),
      calcFunctionInContext = calculate.bind(thisLevel, number);
  if (!checkIfIsMathOperation(getOperationName(thisLevel.operationsAvailable[number]))) {
    let operationName = getOperationName(thisLevel.operationsAvailable[number]);
    button.setAttribute("id", operationName);
    button.childNodes[1].innerHTML = operationName;
    button.style.display = "flex";
    button.addEventListener("click", calcFunctionInContext);
  } else {
    let operationName = getOperationName(thisLevel.operationsAvailable[number]);
    button.childNodes[1].innerHTML = "" + operationName + thisLevel.operationsAvailable[number]("showVal");
    button.style.display = "flex";
    button.addEventListener("click", calcFunctionInContext);
    button.classList.add("math-operation");
  }
  buttons[number] = {};
  buttons[number].number = buttonNumber;
  buttons[number].operation = calcFunctionInContext;
}
