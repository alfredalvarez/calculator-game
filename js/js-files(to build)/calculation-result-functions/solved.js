// ФУНКЦИЯ ВЫЗЫВАЕТСЯ ПРИ УСПЕШНОМ РЕШЕНИИ ЗАДАЧИ (СООТВЕТСТВИЕ РАБОЧЕГО ЗНАЧЕНИЯ ЦЕЛЕВОМУ)
function solved(result) {
  var element = document.getElementById("current-value--error-success");
  element.innerHTML = "WIN";
  // ВЫЗВАТЬ ФУНКЦИЮ ПЕРЕКЛЮЧАЮЩУЮ УРОВЕНЬ, А ПОТОМ ВЕРНУТЬ ПАРАМЕТРЫ ТЕКУЩЕГО УРОВНЯ ДО ДЕФОЛТНЫХ
// TODO: Add a blink() function that will make a text on the display blink when the function is envoked #solved;
  return "Solved!";
}
