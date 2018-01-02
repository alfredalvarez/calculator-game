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
  var currentLevel = findCurrentLevel();
