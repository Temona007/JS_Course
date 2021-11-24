// task 4

// array with people
var firmEmployees = [];

// person Object
var Employee = {
    name: 'Art',
    sName: 'R',
    age: 32,
    occupation: 'JS developer',
    show: function() {
        document.write(this.name + "<br />");
        document.write(this.sName + "<br />");
        document.write(this.age + " years <br />");
        document.write(this.occupation + " <br /><br />");
    }
}

// add person to array
function addEmployee(firm, employee) {
    for (var key in employee) {
        if (typeof employee[key] !== "function") {
            var a = prompt("Add " + key);
            employee[key] = a;
        }
        else {
            employee[key](); // activate "show()" function
        }
    }
    firm.push(employee);
}

// if user click "cancel" all infromation shows on screen
do {
    addEmployee(firmEmployees, Employee);
    var addNew = confirm('Do you want add new employee?');
} while (addNew);



