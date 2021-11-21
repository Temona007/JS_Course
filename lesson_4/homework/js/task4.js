var fibIndex = +prompt('Add Fibonacci index:');

function getFibValue(index) {
    let previous = 0; 
    let next = 1;
    for(let i = 0; i < index; i++){
      let temporary = next;
      next = previous + next;
      previous = temporary;
    }
    document.write('Fibonacci value by index "' + index +  '" is == ' + previous);
  }
    

getFibValue(fibIndex);
