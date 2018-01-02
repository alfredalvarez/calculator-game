var thisLevel = (function(level) {
   var result = {};
   for (var prop in levels[level]) {
     result[prop] = levels[level][prop];
   }
   return result;
 })(currentLevel);
