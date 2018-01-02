"use strict";

  var maxlength = 6,
      mathOperations = {
    "+": function(Val) {
      var parentFunc = mathOperations['+'];
      return function(initVal) {
        if (initVal == "showName") {
          return parentFunc.name;
        } else if (initVal == "showVal") {
          return Val;
        } else {
        return initVal + Val;
        }
      };
    },
    "-" : function(Val) {
      var parentFunc = mathOperations['-'];
      return function(initVal) {
        if (initVal == "showName") {
          return parentFunc.name;
        } else if (initVal == "showVal") {
          return Val;
        } else {
        return initVal - Val;
        }
      };
    },
    "/": function(Val) {
      var parentFunc = mathOperations['/'];
      return function(initVal) {
        if (initVal == "showName") {
          return parentFunc.name;
        } else if (initVal == "showVal") {
          return Val;
        } else {
        return initVal / Val;
        }
      };
    },
    "*": function(Val) {
      var parentFunc = mathOperations['*'];
      return function(initVal) {
        if (initVal == "showName") {
          return parentFunc.name;
        } else if (initVal == "showVal") {
          return Val;
        } else {
        return initVal * Val;
      }
    };
    }
  },
  otherOperations = {
    "reverse": function(arr) {
      var parentFunc = otherOperations['reverse'];
      if (arr == "showName") {
        return parentFunc.name;
      }
      return arr.reverse();
    }
  };

  var levels = {
    1: {
      isCurrent: false,      // ТЕКУЩИЙ УРОВЕНЬ (ДА/ НЕТ)
      stepsAvailable: 3,
      operationsAvailable: [mathOperations['+'](2)],
      initValue: 0,
      goal: 6,
      operValIsArray: false,
      operVal: 0            // ЗНАЧЕНИЕ, С КОТОРЫМ БУДЕМ РАБОТАТЬ
    },
    2: {
      isCurrent: false,
      stepsAvailable: 2,
      operationsAvailable: [mathOperations['+'](2), mathOperations['-'](3)],
      initValue: 0,
      goal: 6,
      operValIsArray: false,
      operVal: 0
    },
    3: {
      isCurrent: true,
      stepsAvailable: 2,
      operationsAvailable: [mathOperations['+'](2), mathOperations['-'](3), mathOperations['/'](2), otherOperations['reverse']],
      initValue: 0,
      goal: 6,
      operValIsArray: false,
      operVal: 0
    }
  },
  levelNumber = document.getElementById("level-number"),
  displayValue = document.getElementById("current-value--error-success"),
  moves = document.getElementById("moves-number"),
  goalNumber = document.getElementById("goal-value");

  function findCurrentLevel() {
    var currentLevel;
    // НАХОДИМ ОБЪЕКТ С ТЕКУЩИМ УРОВНЕМ (isCurrent == TRUE)
    for (var i = 0; i < Object.keys(levels).length; i++) {
      if (levels[i + 1].isCurrent == true) {
        currentLevel = i + 1;
        return currentLevel;
      }
    }
  }
// ВЫВЕСТИ ВСЕ НЕОБХОДИМЫЕ ЗНАЧЕНИЯ НА ДИСПЛЕЕ: ЗНАЧЕНИЕ, КОЛ-ВО ШАГОВ, ЦЕЛЕВОЕ ЧИСЛО
  var currentLevel = findCurrentLevel(),
// СОБИРАЕТ НОМЕРА КНОПОК И ИХ ОПЕРАЦИИ ДЛЯ СБРОСА
      buttons = [];
  levelNumber.innerHTML = currentLevel;
  displayValue.innerHTML = levels[currentLevel].operVal;
  moves.innerHTML = levels[currentLevel].stepsAvailable;
  goalNumber.innerHTML= levels[currentLevel].goal;
// СОЗДАЕМ ПАНЕЛЬ С КНОПКАМИ С ОПЕРАЦИЯМИ В ДАННОМ УРОВНЕ
   (function makePlayground() {

    var thisLevel = (function(level) {
       var result = {};
       for (var prop in levels[level]) {
         result[prop] = levels[level][prop];
       }
       return result;
     })(currentLevel);

     function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1) + min);
     }

     function getOperationName(func) {
       return func("showName");
     }

     function checkIfIsMathOperation(operation) {
       var mathSymbols = ["+", "-", "*", "/"];
       if (mathSymbols.indexOf(operation) != -1) return true;
       return false;
     }

     function buildButton(number) {
       var button = document.getElementById(buttonName + buttonNumber),
           calcFunctionInContext = calculate.bind(curLevel, number);
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

    var buttonNumber = 2,
    buttonName = "button-",
    buttonsUsed = [],
    curLevel = levels[currentLevel];

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
  })();
//TODO: FIND OUT IF COPYING LEVEL-OBJECT IS NECESSARY


/* ФУНКЦИЯ "SOLVED" ЗАПУСКАЕТСЯ ПРИ РЕШЕНИИ ЗАДАЧИ:
    1) БУДЕТ С ИНТЕРВАЛАМИ ВЫВОДИТЬ НАДПИСЬ "WIN" И ПОЛУЧЕННОЕ ЗНАЧЕНИЕ,
       ПОКА ПОЛЬЗОВАТЕЛЬ НЕ ПЕРЕКЛЮЧИТ УРОВЕНЬ;
    2) ВЫСТАВЛЯЕТ ЗНАЧЕНИЕ СВОЙСТВА "isCurrent" У СЛЕДУЮЩЕГО УРОВНЯ "TRUE"
    3) ВЫЗЫВАЕТ ФУНКЦИЮ, СБРАСЫВАЮЩУЮ ПАРАМЕТРЫ У ТЕКУЩЕГО УРОВНЯ
*/
  function solved(result) {
    var element = document.getElementById("current-value--error-success");
    element.innerHTML = "WIN";
    // ВЫЗВАТЬ ФУНКЦИЮ ПЕРЕКЛЮЧАЮЩУЮ УРОВЕНЬ, А ПОТОМ ВЕРНУТЬ ПАРАМЕТРЫ ТЕКУЩЕГО УРОВНЯ ДО ДЕФОЛТНЫХ
// TODO: Add a blink() function that will make a text on the display blink when the function is envoked #solved;
    return "Solved!";
  }

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

  function switchLevel() {
    currentLevel++;
    levels[(currentLevel - 1)].isCurrent = false;
    levels[currentLevel].isCurrent = true;
  }

  function clear() {
    //TODO: ФУНКЦИЯ ДОЛЖНА ВОЗВРАЩАТЬ НАСТРОЙКИ УРОВНЯ ПО УМОЛЧАНИЮ
  }

  function error() {
    console.log("error called");
    var element = document.getElementById("current-value--error-success");
    element.innerHTML = "ERROR";
    return "Error!";
  }
// TODO: PROBLEM WITH CALCULATION ALGORITHM! CHECK IT
  function calculate(funcNumber) {
    // ВЫПОЛНЯЕМ ВЫЧИСЛЕНИЯ И ВЫВОДИМ РЕЗУЛЬТАТ НА ПАНЕЛИ
    var result = this.operationsAvailable[funcNumber](this.operVal);
    console.log(this.operVal);
    displayValue.innerHTML = result;
    // ВЫЧИТАЕМ ЕДИНИЦУ ИЗ КОЛ-ВА ДОСТУПНЫХ ШАГОВ
    this.stepsAvailable--;
    moves.innerHTML = this.stepsAvailable;
    if (this.stepsAvailable == 0 && result != this.goal) failed();
    if (result > maxlength) {
      return error();
    // СМОТРИМ РАВНЯЕТСЯ ЛИ РЕЗУЛЬТАТ ВЫЧИСЛЕНИЙ ЦЕЛЕВОМУ ЗНАЧЕНИЮ
    } else if (result == this.goal) {
      return solved();
    } else {
    // БУДЕТ ВЫВОДИТЬСЯ ФУНКЦИЯ, КОТОРАЯ БУДЕТ СООБЩАТЬ, ЧТО ЗАДАЧА РЕШЕНА
    this.operVal = result;
    }
    return;
  }
