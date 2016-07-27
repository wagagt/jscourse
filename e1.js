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

//

function curry (binary, first){
  return function (second){
    return binary(first, second);
  };
}

var add3 = curry (add, 3);
console.log('curry = ' + add3(4)); // 7
