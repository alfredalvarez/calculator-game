var mathOperations = {
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
