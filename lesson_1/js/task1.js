/*
*
	== TASK 1 ==
	По координатам двух точек, которые вводит пользователь, определить уравнение прямой,
	проходящей через эти точки.
  Общий вид уравнения:
  y = kx + b;
  k = (y1 - y2) / (x1 - x2),
  b = y2 - k*x2.

  => y = 4x + 1
  => y = 4x + 1 => 4 * 2 + 1 => 9
*
*/

var x1 = prompt ('X1 = ');
var y1 = prompt ('Y1 = ');

var x2 = prompt ('X2 = ');
var y2 = prompt ('Y2 = ');

var k = (y1 - y2) / (x1 - x2);
var b = y2 - k * x2;

document.write('This is formula:<br> Y = ' + k + 'X + ' + b);
