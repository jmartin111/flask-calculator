const values = [];
 function updateDisplay(v) {
    var display = document.getElementById("display");
    display.value += v;
 }

 function processValue(operator) {
    values.push(document.getElementById("display").value);
    values.push(operator);
    document.getElementById("display").value = "";
 }