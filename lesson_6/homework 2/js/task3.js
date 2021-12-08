// task 3

function checkPositive(arr) {
   var result = arr.some(value => value > 0);
   console.log(result);
}

checkPositive([1, 2, 3, -4, 5]);