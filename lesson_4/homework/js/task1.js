var first  = +prompt('Add first element');
var second = +prompt('Add first element');
var operation = prompt('Add operation');

function calculate(a, b, sign) {
    if (!isNaN(a) && !isNaN(b)) { // i used !isNaN to check if A and B are numbers
        switch (sign) {
            case "+":
                document.write(a + b);
                break;
            case "-":
                document.write(a - b);
                break;
            case "*":
                document.write(a * b);
                break;
            case "/":
                document.write(a / b);
                break;
            default:
                document.write(sign + " is not used.");
        }
    }
    else {
        document.write('Input value is NOT A NUMBER');
    }    
}

calculate(first, second, operation);

