// task 2

let users = [
    {
        age: 27,
        online: false
    },
    {
        age: 32,
        online: true
    },
    {
        age: 48,
        online: false
    },
    {
        age: 19,
        online: true
    }
];

function countOnline(arr) {

    var counter = 0

    for (var i = 0; i < arr.length; i++ ) {
        console.log(arr[i]);
        // for (var j = 0; j < arr[i].length; j++)
        
        // console.log("arr[i][j]");
        // var online = arr[i].find(item => item.online == true);
        // if (online == true) {
        //     counter++;
        // }
        
    }
    
    return counter;
    // найти пользователей онлайн
    // выводит только одного
    //return arr.find(item => item.online == true);
}
console.log(countOnline(users));