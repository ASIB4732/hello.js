function fectorial(n) {
  var i = 1;
  var fact = 1;
  while (i <= n) {
    fact = fact * i;
    i++;

  }
  return fact;
}

var result=fectorial(10);
console.log(result);






function fector(n) {
  var i = 1;
  var number = 1;
  while (i <= n) {
    number = number * i;
    i++;

  }
  return number;
}


var result = fector(4);
console.log(result);