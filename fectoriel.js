

// var number = 1;

// for (i = 1; i <= 10; i++) {

//     number=number*i
//     console.log(i, number);
// }

// function fectorial(n){
// var number =1;
// for(i=1;i<n;i++){


// number=number*i;
// console.log(number);
// }

// }


// fectorial(10)









// function factoreals(n){

//     var xxx =1;
//     for(i=1;i<n;i++){
//       xxx=xxx*i;
//       console.log(xxx);
//     }
// }


// factoreals(7);




// function fectorial(n){
// var i = 1;
// var fact =1;
// while(i<=n){
// fact=fact*i;
// i++;
// console.log(fact);
// }
// }

// fectorial(10)







// function fector(n){
//   var i=1;
//   var number =1;
//   while(i<=n){
//    number=number*i;
//    i++;
//    console.log(number);
//   }
// }


// fector(8)



function fectorel(n){
if(n==0){
return 1;
}
else{
  return n*fectorel(n-1);
}
}

var result5=fectorel(8);
console.log(result5);

















function fectorealno(w){
if(w==0){
  return 1;
}
else{
  return w*fectorealno(w-1)
}
}
var fff=fectorealno(11);
console.log(fff);

