/*
	== TASK 4 ==
	Получить от пользователя данные о пользователе:
	имя, фамилию, возраст. Обработать их и вывести на экран.
*/

var name    = prompt('What is your name?');
var surname = prompt('What is your surname?');
var age     = prompt('What is your age?');

// show in browser
document.write('Your name is <b>'    + name    + '</b><br>');
document.write('Your surname is <b>' + surname + '</b><br>');
document.write('Your age is <b>'     + age     + '</b><br>');
