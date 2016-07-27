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

//

function addf (first){
  return function (second ){
    return first + second;
  };
}


// exercice CURRY
function curry (binary, first){
  return function (second){
    return binary(first, second);
  };
}

var add3 = curry (add, 3);
//console.log('curry = ' + add3(4)); // 7

// exercice CURRYR
function curryr (binary, first){
  return function (second){
    return binary (second, first);
  };
}

var sub3 = curryr (sub, 3);
sub3(11)  //8
sub3(3) //0


// liftf

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
var inc =   curry( add, 1);
console.log(inc(5));
console.log(inc(inc(5)));
 // inc (5) // 6
 // inc (inc(5)) //7
// answers
 // addf (1);
 // curry (add,1);
 // curryr (add,1);
 // lift(add)(1);
