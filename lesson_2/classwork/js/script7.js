var userLogin = prompt('Log in:');

if (userLogin == 'admin') {
    var userPassword = prompt('Password:');

    if (userPassword == 'iamboss') {
        document.write('Hello Boss!');
    } else if (userPassword == null) {
        document.write('Cancel');
    } else { 
        document.write('Wrong password');
    }

} else if (userLogin == '') {
    document.write('Cancel');
} else if (userLogin == null) {
    document.write('Cancel');
} else {
    document.write('I dont know you');
}



