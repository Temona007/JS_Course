var b = +prompt('Enter value from 4 till 50');

for (var i = 0; i < b; i++) {

    for (var j = 0; j < i; j++) {
        document.write(' * ');
    }
    document.write('<br />');
}