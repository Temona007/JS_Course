// TAKS 8

var myList = [
    ['Coca Cola',   18],
    ['Chocollatte', 28],
    ['BigMak',      67],
    ['Ice Cream',   32],
    ['Beer',        30]
];

myList.push(['Milk', 32], ['Cigar', 30]);
myList.shift(myList);

for (var i = 0; i < myList.length; i++ ) {
    console.log(myList[i][0]);
}