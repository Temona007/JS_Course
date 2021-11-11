/*
	== TASK 2 ==
	Обменять значения двух переменных, используя третью (буферную) переменную.
	Вывести значение переменных до и после обмена.
*/

var a = 5;
var b = 7;
var c = null;

document.write("value 'a' before editing = " + a + "<br>");
document.write("value 'b' before editing = " + b + "<br>");

c = a;
a = b;
b = c;

document.write("value 'a' after editing = " + a + "<br>");
document.write("value 'b' after editing = " + b + "<br>");
