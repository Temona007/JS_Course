// TASK 10


var numbersArr = [];
var value

while(true) {
    value = +prompt('Add number');
    if (isNaN(value)) {
        break;
    }
    if (!value) {
        break;
    }

    numbersArr.push(+value);
}

console.log(numbersArr);


// var arr = new Array();

// do{
//     var num = prompt("Введите число");
//     if (num === ""|| num == null || isNaN(num)){
//         break;
//     } 
    
//     arr.push(+num);   
// } while (true);


// console.log(arr);