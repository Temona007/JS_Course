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

    var showOnlineArr =  arr.filter(item => item.online == true);
    
    return showOnlineArr.length;
}

console.log("User online = " + countOnline(users));