function identifyf (arg){
  return function (){
      return arg;
    };
}

var test = identifyf(3);
console.log(test());
