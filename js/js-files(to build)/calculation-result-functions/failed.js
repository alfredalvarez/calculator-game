// ФУНКЦИЯ ЗАПУСКАЕТСЯ ПРИ ИСЧЕРПАНИИ КОЛИЧЕСТВА ДОСТУПНЫХ ШАГОВ И НЕ СООТВЕТСТВИИ РАБОЧЕГО ЗНАЧЕНИЯ С ЦЕЛЕВЫМ
function failed() {
  console.log("fail called");
  var element = document.getElementById("calculator-face--regular-sad"),
  buttonName = "button-",
  currentButton;
  element.style.backgroundPosition = "0px -5px";
  // СБРОС СОБЫТИЙ ДЛЯ КНОПОК
  //TODO: РЕШИТЬ ПРОБЛЕМУ СБРОСА СОБЫТИЙ ДЛЯ REVERSE
  for (var i = 0; i < buttons.length - 1; i++) {
    currentButton = document.getElementById(buttonName + buttons[i].number);
    currentButton.removeEventListener("click", buttons[i].operation);
  }
  buttons.lentgh = 0;
   return "Failed";
}
