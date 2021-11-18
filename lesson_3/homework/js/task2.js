var cars     = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Honda", "Mercedes"];
var userMark = prompt('What car mark do you like?');

if (cars.includes(userMark)) {
    userMark = prompt('Ok,what else?');
}
// added second "if" to check this iteraction after first if == true
if (cars.includes(userMark) == false) {
    cars.push(userMark); 
}

// show results 
document.write(cars.join(' - '));