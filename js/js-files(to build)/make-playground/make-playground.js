(function makePlayground() {
  // ГЕНЕРИРУЕМ СЛУЧАЙНОЕ ЧИСЛО ДЛЯ НОМЕРА КНОПКИ (ФУНКЦИЯ)

  // ПОЛУЧАЕМ НАЗВАНИЕ ОПЕРАЦИИ (ФУНКЦИЯ)

  // ПРОВЕРЯЕМ ЯВЛЯЕТСЯ ЛИ КНОПКА МАТЕМАТИЧЕСКОЙ ОПЕРАЦИЕЙ (ФУНКЦИЯ)

  /* ФУНКЦИЯ, СОЗДАЮЩАЯ КНОПКУ:
    1) ПОДСТАВЛЯЕТ ID;
    2) ЗАПИСЫВАЕТ НА КНОПКЕ НАЗВАНИЕ ОПЕРАЦИИ И РАБОЧЕЕ ЗНАЧЕНИЕ;
    3) ОТОБРАЖАЕТ КНОПКУ (display: flex);
    4) ДОБАВЛЯЕТ КНОПКЕ СОБЫТИЕ С ПРИВЯЗАННОЙ ОПЕРАЦИЕЙ;
  */

 var buttonNumber = 2,
     buttonName = "button-",
     buttonsUsed = [],
     curLevel = levels[currentLevel],
     clearButton = document.getElementById("clear");
// ВЫЧИСЛЯЕМ ДЛИНУ МАССИВА ДОСТУПНЫХ ОПЕРАЦИЙ В КОНКРЕТНОМ УРОВНЕ И ВЫЗЫВАЕМ ФУНКЦИЮ-СТРОИТЕЛЬ КНОПОК
 if (thisLevel.operationsAvailable.length == 1) {
   buildButton(0);
 } else {
   for (var i = 0; i < thisLevel.operationsAvailable.length; i++) {
     buttonNumber = getRandomInt(1,5);
     console.log(buttonNumber);
     if (buttonsUsed.indexOf(buttonNumber) == -1) {
       buildButton(i);
       buttonsUsed.push(buttonNumber);
       console.log(buttonsUsed);
     } else {
       while (buttonsUsed.indexOf(buttonNumber) != -1) {
         buttonNumber = getRandomInt(1,5);
         if (buttonsUsed.indexOf(buttonNumber) == -1) {
           buildButton(i);
           buttonsUsed.push(buttonNumber);
           break;
         }
       }
     }
   }
 }

 // ДОБАВЛЯЕМ КНОПКЕ "CLEAR" СОБЫТИЕ (ОЧИЩЕНИЕ ЗНАЧЕНИЙ)
 clearButton.addEventListener("click", function() {
   thisLevel.stepsAvailable = levels[currentLevel].stepsAvailable;
   thisLevel.operVal = levels[currentLevel].initVal;
 });
})();
