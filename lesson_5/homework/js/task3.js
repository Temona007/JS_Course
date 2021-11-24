// task 3

var Obj = {};

var keys   = ['BMW', 'Audi', 'ZAZ', 'Honda'];
var values = [3.5, 2.2, 2.8, 1.6];

for(var i = 0; i < keys.length; i++) {
    Obj[keys[i]] = values[i];
}

console.log(Obj);
