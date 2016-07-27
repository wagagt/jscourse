function add(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

function mul(a,b){
  return a*b;
}


var res1 = add(2,1);
console.log('sum = ' + res1);


var res1 = sub(2,1);
console.log('sub = ' + res1);

var res1 = mul(2,1);
console.log('mul = ' + res1);

function identifyf (arg){
  return function (){
      return arg;
    };
}

// exercise addf
function addf (first){
  return function (second ){
    return first + second;
  };
}

var addfunction = addf(4);
console.log ('addfunction = ' + addfunction(5));


// exercice CURRY
console.log('************ curry');
function curry (binary, first){
  return function (second){
    return binary(first, second);
  };
}
var add3 = curry (add, 3);
console.log('curry = ' + add3(4)); // 7

// exercice CURRYR
console.log('************ curryR');
function curryr (binary, first){
  return function (second){
    return binary (second, first);
  };
}

var sub3 = curryr (sub, 3);
sub3(11)  //8
sub3(3) //0


// liftf
console.log('************ lift');
function liftf(binary){
  return function (first){
    return function (second){
        return binary (first, second);
    };
  };
}

var addf = liftf (add);
addf(3)(4)  //7
liftf(mul)(5)(6)  // 30

// console.log('2 parametros = ' + addf(3)(4));
// console.log('3 parametros = ' + liftf(mul)(3)(4));

// show four ways to create the inc function
console.log('************ define INC');
var inc =   curry( add, 1);
console.log('inc(5) = ' + inc(5));
console.log('inc(inc(5)) = ' + inc(inc(5)));
 // inc (5) // 6
 // inc (inc(5)) //7
// answers
 // addf (1);
 // curry (add,1);
 // curryr (add,1);
 // lift(add)(1);

// TWICE function
console.log('************ TWICE');

function twice (binaryF){
  return function (arg){
    return binaryF(arg, arg);
  };
}

var square = twice(mul);
console.log( ' square 5 = ' + square (5));

var doble = twice(add);
console.log( ' doble 5 = '+ doble(5));


// REVERSE
console.log('************ REVERSE');

function reverse(binaryF){
  return function (first, second){
    return binaryF(second,first);
  };
}

var bus = reverse(sub);
console.log ( 'bus (3,2) = ' + bus(3,2)) ;


// COMPOSEU
console.log('************ COMPOSEU');
function composeu(binaryF1, binaryF2){
  return function (val) {
    return (binaryF2(binaryF1(val)));
  };
}

console.log("composeu(doble, square) (5) = " + composeu(doble, square) (5));  //100


// composeb
console.log('************ COMPOSEU');
function composeb(f1,f2){
  return function (v1,v2,v3){
    return (f2(f1(v1,v2),v3));
  };
}

console.log("composeb(add, mul)(2,3,7) = " + composeb(add, mul)(2,3,7));  // 35

// limit
console.log('************ LIMIT ');
function limit (binaryF, l){
  var t = 0;
    return function (v1, v2){
      if(t<=l){
        l += 1;
        return (binaryF(v1,v2));
      };
      return undefined;
    };
}

var add_ltd = limit(add,1);
add_ltd(3,7); //7
add_ltd(3,5); //undefinied
console.log ( "con add, 2 = ");
console.log ( "add_ltd(1,2)  = " +  add_ltd(1,2));
console.log ( "add_ltd(2,3)  = " +  add_ltd(2,3));
console.log ( "add_ltd(3,4)  = " +  add_ltd(3,4));



// GENERATOR
// GENERATOR FACTORY FROM
console.log('************ FACTORY FROM');

function from (l){
  return function (){
    next = l;
    l+=1;
    return next;
  }
}

var gen = from (2);
console.log ('using gen=from(2)');
console.log( 'gen()' + gen());
console.log( 'gen()' + gen());
console.log( 'gen()' + gen());


// GENERATOR FACTORY TO
console.log('************ FACTORY TO');

function to (binaryFrom, end){
  return function (){
    var from = binaryFrom();
    if (from < end){
      return from;
    }
  };
}


var gen = to (from(3), 5);
console.log('con var gen = to (from(3), 5);');
console.log('gen() = ' + gen());
console.log('gen() = ' + gen());
console.log('gen() = ' + gen());


// FACTORY FROM TO
console.log('************ FACTORY FROM TO');

// function fromTo (f,t){
//   return function (){
//     var next = f;
//     f+=1;
//     if (next < t ){
//       return next;
//     }
//     return undefined;
//   };
// }

function fromTo(start,end){
  return to(
    from(start),
    end
  );
}

var gen = fromTo(0,3);
console.log ('con gen = fromTo(0,3)...');
console.log('gen() =' + gen());
console.log('gen() =' + gen());
console.log('gen() =' + gen());
console.log('gen() =' + gen());
console.log('gen() =' + gen());


// ELEMENT
console.log('************ ELEMENT ');

// function element(arr, binaryF){
//   var ele = binaryF;
//   return function (){
//     return arr[ele()];
//   };
// }

//correct way
function element(array,gen){
  return function (){
    var index = gen();
    if (index !== undefined) {
      return array[index];
    }
  };
}

var gen = element(["a", "b", "c", "d"],
    from (1,3)
  );

console.log('gen() =' + gen());  // b
console.log('gen() =' + gen());  // c
console.log('gen() =' + gen());  // d


// MODIFY ELEMENT -> GENERATOR ARGUMENT IS OPTIONAL.
// console.log('************ ELEMENT with argument optional');
//
// //correct way
// function element2(array,gen){
//   return function (){
//     if(gen === undefined){
//       gen = fromTo(0, array.length);
//     }
//     return function () {
//       var index = gen();
//       if (index !== undefined) {
//         return array[index];
//     }
//   };
// }
//
//
// var gen = element2(["a", "b", "c", "d"]);
//
// console.log('gen() =' + gen());  // a
// console.log('gen() =' + gen());  // b
// console.log('gen() =' + gen());  // c
// console.log('gen() =' + gen());  // d


//function COLLECT
// function collect (gen, array){
//     return function () {
//       var value = gen();
//       array.push(value);
//     }
//     return value;
// };
//
// var array=[];
// var gen = collect(fromTo(0,2), array);
// gen();
// gen();
// gen();
// array //[0,1]



// FILTER
//correct way

console.log('************ FILTER ');

// way 1
// function filter(gen,predicate){
//   return function(){
//     var value;
//     do{
//       value=gen();
//     }while( value !== undefined && !predicate(value));
//       return value;
//     )
//   }
// }

//way 2
function filter (gen,predicate){
  return function recur(){
    var value = gen ();
    if (value === undefined || predicate(value)){
      return value;
    }
    return recur();
  };
}

// my way
// function filter (ft, f){
//   return function (){
//     var val = ft();
//     if (f(val)) {
//       return val;
//     };
//
//   };
// };

var gen = filter (
  fromTo(0,6),
  function third(value){
    return (value%3) ===0;
  }
);

console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());



// concat
console.log('************ CONCAT ');

function concat(f1,f2){
  return function recur(){
    var value = f1 ();
    if (value === undefined) {
      return f2();
    }else{
      return value;
    }
    return recur();
  };
}


var gen = concat(fromTo(0,3), fromTo(0,2));
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());


// gensymf
console.log('************ GENSYMF ');

function gensymf2(v){
  var num = 0;
  return function (){
      num +=1;
      return (v+num);
  }
}

function gensymf(v){
  var num = from(1);
  return function (){
      return (v+num());
  }
}


var geng = gensymf("G");
var genh = gensymf("H");
console.log(geng());
console.log(geng());
console.log(genh());
console.log(genh());


// gensymff
console.log('************ GENSYMFF');
// function gensymff(seed){
//   return function(prefix){
//     var=gen
//   }
// }

// fibonaccif
console.log('************ FIBONACCIF ');

function fibonaccif(a,b){
  return function(){
    var fib = a;
    var temp = a+b;
    a=b;
    b=temp;
    return fib;
  }
}

var fib = fibonaccif(0,1);
console.log(fib());//0
console.log(fib());//1
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
