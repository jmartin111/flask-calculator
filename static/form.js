var values = [];
var equation = ""

function displayInit() {
    display = document.getElementById("display");
}

 function updateDisplay(v) {
    if (equation == "*") {
        display.value = "";
        equation = "";
    }
    display.value += v;
 }

 function processValue(operator) {
    values.push(display.value);
    values.push(operator);
    display.value = "";
 }

 function calculate() {
    // add the last value on screen
    values.push(display.value);

    for(let index=0; index < values.length; index++) {
        equation += values[index];
    }

    display.value = eval(equation);

    // clear operands and operators and the equation
    values = []
    // use this as a token for updateDisplay
    equation = "*"
 }
