var value1 = +prompt('Enter 1st value:');
var value2 = +prompt('Enter 2nd value:');
var value3 = +prompt('Enter 3rd value:');

if (value1 == value2 || value2 == value3 || 
    value3 == value1) {
    alert('Error');
} else {
    var average = (value1 + value2 + value3) / 3;
    document.write('Avarage namber = ' + average);
}

