var basket = [ 'Apples', 'Cocal Cola', 'Milk', 'Meet', 'Beer', 'Chips'];

// join() & reverse()
var basketReverse = basket.reverse().join(' / ');
// document.write(basketReverse);

// sort()
var basketSort = basket.sort().join(' - ');
// document.write(basketSort);

// concat()
var newBasket = basket.concat('Bread', 'Souse', 'Fish', 'Pasta');
// document.write(newBasket.join(', '));

// slice()
var workLunch = basket.slice(0, 3);
// document.write(workLunch.join(', '));

// splice()
var updateBasket = basket.splice(1, 2);
// document.write(updateBasket.join(', ') + '<br />');
// document.write(basket.join(', '));

// push()
var addLastElememt = basket.push('Popit');
// document.write(addLastElememt); // show basket[] length

// pop()
var deleteLast = basket.pop();
// document.write(deleteLast); // show deleted element

// unshift()
var addFirstElement = basket.unshift();
// document.write(addFirstElement); // show basket[] length

// shift()
var deleteFirst = basket.shift();
document.write(deleteFirst); // show deleted element

