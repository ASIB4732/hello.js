function numberoftry(n){
    var fibo =[0,1];

for(i=2;i<=n;i++){
fibo[i]=fibo[i-1]+fibo[i-2];
}
return fibo;
}
var result =numberoftry(20);
console.log(result);




// function febonacci(n) {
//     var fivo = [0, 1]
//     for (i = 0; i <= n; i++) {
//         fivo[i] = fivo[i - 1] + fivo[i - 2]
//     }
//     return fibo
// }


// var result= febonacci(12);
// console.log(result);








