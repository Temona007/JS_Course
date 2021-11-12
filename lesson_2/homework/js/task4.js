var a = 44;
var b = 99;
var sum = 0;

// show sum
for (var i = a; i < b; i++ ) {
    sum += i;
}

document.write('Sum of all values = ' + sum + '<br />');

// show odd values
for (var i = a; i < b; i++ ) {
    if (i % 2 == true) {
        document.write(i + '<br />');
    }
}