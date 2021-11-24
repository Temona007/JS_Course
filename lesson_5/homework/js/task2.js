// task 2

var Calculator = {
    a: 3, // test value. Will be re-assigned later
    b: 4, // test value. Will be re-assigned later
    calcSum: function() {
        document.write(this.a + this.b);
    },
    calcMinus: function() {
        document.write(this.a - this.b);
    },
    calcMultiplication: function() {
        document.write(this.a * this.b);
    },
    calcDivision: function() {
        document.write(this.a / this.b);
    }
}

var firstValue  = +prompt('Value 1');
var secondValue = +prompt('Value 2');
var operation   =  prompt('Operation');

Calculator.a = firstValue;
Calculator.b = secondValue;

// Logic
if (operation == '+') {
    Calculator.calcSum();
}
else if (operation == '-') {
    Calculator.calcMinus();
}
else if (operation == '*') {
    Calculator.calcMultiplication();
}
else if (operation == '/') {
    Calculator.calcDivision();
}
else {
    document.write('Write correct operator please!');
}

// CANT DONE through "switch"
// switch(operation) {
//     case '+':
//         Calculator.calcSum();
//         break;
// }


