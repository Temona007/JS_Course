// TASK 9 

var stylesArr = ['Jazz', 'Blues'];
stylesArr.push('rock-n-roll');

var middleArray = Math.floor(stylesArr.lenght / 2);

stylesArr[middleArray] = 'Classic';

console.log(stylesArr);

var delFirst = stylesArr.shift;

console.log(delFirst);

stylesArr.unshift('Rap', 'Reggi');

console.log(stylesArr);