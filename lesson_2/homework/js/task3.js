var value1 = +prompt('Enter 1st value:');
var value2 = +prompt('Enter 2nd value:');
var value3 = +prompt('Enter 3rd value:');

if (value1 > value2 && value1 > value3) {
    document.write('Max is ' + value1);
}
else if (value2 > value1 && value2 > value3) {
    document.write('Max is ' + value2);
}
else if (value3 > value1 && value3 > value2) {
    document.write('Max is ' + value3);
}