function checkIfIsMathOperation(operation) {
  var mathSymbols = ["+", "-", "*", "/"];
  if (mathSymbols.indexOf(operation) != -1) return true;
  return false;
}
