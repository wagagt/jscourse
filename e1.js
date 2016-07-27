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
