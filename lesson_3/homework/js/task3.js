var userArray = new Array();
var oddArray  = ['odd', 'odd', 'odd'] ;
var evenArray = ['even', 'even', 'even'];
var arrLength = prompt('What will be array length?');

for (var i = 0; i < arrLength; i++) {
    if (i % 2 == true) {
        userArray[i] = evenArray;
    }
    else {
        userArray[i] = oddArray;
    }
}

document.write(userArray.join('<br />'));