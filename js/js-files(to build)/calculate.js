/* ДАННАЯ ФУНКЦИЯ ПОЛУЧАЕТ НОМЕР ОПЕРАЦИИ И РАБОЧЕЕ ЗНАЧЕНИЕ И ВЫПОЛНЯЕТ ВЫЧИСЛЕНИЯ
   (ОПЕРАЦИЯ БЕРЕТСЯ ИЗ .operationsAvailable).
   КРОМЕ ТОГО ФУНКЦИЯ ВЫЗЫВАЕТ СООТВЕТСТВУЮЩИЕ ФУНКЦИИ ЕСЛИ ЗАДАЧА БЫЛА/НЕ БЫЛА РЕШЕНА.
*/

// (ПРОВЕРИТЬ РАБОТУ АЛГОРИТМА)
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
