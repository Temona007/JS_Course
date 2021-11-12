var num = +prompt('Enter value:');

switch (num) {
    case 5:
        console.log('Tiny');
        break;
    case 10:
        console.log('Small');
        break;
    case 15:
        console.log('Medium');
        break;
    case 20:
        console.log('Large');
        break;
    case 25:
        console.log('Huge');
        break;
    default:
        console.log('Size undefined');
}
