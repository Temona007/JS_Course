var number = +prompt('Add value');
var numberDegree = +prompt('Add degree of number');

function calcDegree (value, degree) {
    if (!isNaN(value) && !isNaN(degree)) {
        var result = 1;
        for (let i = 0; i < degree; i++ ) {
            result *= value;
        }
        document.write(result + "<br/>");
    }
    else {
        document.write(value + " or " + degree + " are not numbers.");
    }
}

calcDegree(number, numberDegree);
    