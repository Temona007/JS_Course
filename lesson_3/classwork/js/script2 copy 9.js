// TASK 11

var arr = [
    [1, -10, 4, 5, -111, 4444],
    [1, 5, 5, 3],
    [-1, 8, 4, 1],
    [1, -10, -4, 5],
    [1, 10, 4, 0],
];

// for (var i = 0; i < arr.length;  i++ ) {
//     var sum = 0;
//     var max = 0;

//     for (j = 0; j < arr[i].length; j++) {
//        sum += arr[i][j];
//     }

//     if (sum > max ) {
//         max = sum;
//     }
    
// }

// console.log(sum);

var maxArr = [];
for (var i = 0; i < arr.length;  i++ ) {
    var sum = 0;
    for (j = 0; j < arr[i].length; j++) {
       sum += arr[i][j];
    }

    maxArr.push(sum);
    
}

var sortedMaxArr = maxArr.sort(function (a, b) { return a - b; });

console.log(sortedMaxArr[sortedMaxArr.length-1]);