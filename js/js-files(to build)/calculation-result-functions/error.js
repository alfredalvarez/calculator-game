function error() {
  console.log("error called");
  var element = document.getElementById("current-value--error-success");
  element.innerHTML = "ERROR";
  return "Error!";
}
