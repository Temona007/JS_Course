// task 4 (code from previous)

var firmEmployees = [];

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

function addEmployee(firm, employee) {
    for (var key in employee) {
        if (typeof employee[key] !== "function") {
            var a = prompt("Add " + key);
            employee[key] = a;
        }
    }
    firm.push(employee);
}

do {
    addEmployee(firmEmployees, Employee);
    var addNew = confirm('Do you want add new employee?');
} while (addNew);


// task 5
function addSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].occupation == 'director') {
            arr[i].salary = 3000;
            document.write(arr[i].salary + '$ salary <br />');
        }
        else if (arr[i].occupation == 'manager') {
            arr[i].salary = 1500;
            document.write(arr[i].salary + '$ salary <br />');
        }
        else if (arr[i].occupation == 'programmer') {
            arr[i].salary = 2000;
            document.write(arr[i].salary + '$ salary <br />');
        }
        else {
            arr[i].salary = 'There are no such position in company';
        }
        arr[i].show(); // show people
    }
}

addSalary(firmEmployees);