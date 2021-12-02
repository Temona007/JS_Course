// task 2
// не понял что должна вывести ф-я

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
    // найти пользователей онлайн
    // выводит только одного
    return arr.find(item => item.online == true);
}
console.log(countOnline(users));