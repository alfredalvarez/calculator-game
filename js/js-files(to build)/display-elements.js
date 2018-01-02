var levelNumber = document.getElementById("level-number"),
    displayValue = document.getElementById("current-value--error-success"),
    moves = document.getElementById("moves-number"),
    goalNumber = document.getElementById("goal-value");

// ВЫВОДЯТСЯ КОНКРЕТНЫЕ ЗНАЧЕНИЯ ИСХОДЯ ИЗ ПАРАМЕТРОВ ТЕКУЩЕГО УРОВНЯ 
levelNumber.innerHTML = currentLevel;
displayValue.innerHTML = thisLevel.operVal;
moves.innerHTML = thisLevel.stepsAvailable;
goalNumber.innerHTML= thisLevel.goal;
