/ HOME WORK /

// Write a function 'addg' that adds from many invocations, until it sees an empty invocation.
// Hint: return a function that returns itslef

// addg() // undefined
// addg(2)() // 2
// addg(2)(3)() // 5
// addg(5)(0)(2)(1)() // 8

function addg (first){
  if ( first !== undefined){
    return function more (next){
      if (next===undefined){
        return first;
      }
      first +=next;
      return more;
    };
  }
}

// retursion: a function returns itself
