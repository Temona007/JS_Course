var age = +prompt('Add value:');

/*
* first solution:

if (age >= 14 && age <= 90) {
    document.write('Value is in range from 14 to 90');
} else {
    document.write('Value is NOT in range from 14 to 90');
}

*/

var a = 'Value is in range from 14 to 90';
var b = 'Value is NOT in range from 14 to 90';

var result = (age >= 14 && age <= 90) ? document.write(a) : document.write(b);