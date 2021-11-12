var value = +prompt('Enter value from 0 till 3');

switch (value) {
    case 0: 
        alert('value = 0'); 
        break;
    case 1:
        alert('value = 1'); 
        break;
    case 2:
    case 3:
        alert('value = 2 or value = 3'); 
        break;
    default:
        alert('I dont know this number'); 
}