// ФУНКЦИЯ ПЕРЕКЛЮЧАЕТ УРОВЕНЬ
function switchLevel() {
  currentLevel++;
  levels[(currentLevel - 1)].isCurrent = false;
  levels[currentLevel].isCurrent = true;
}
