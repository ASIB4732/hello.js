function fabonacci(n) {
    if (n ==0) {
        return 0
    }
    else if (n ==1) {
        return 1
    } 
    else {
        return fabonacci(n-1) + fabonacci(n-2)
    }
}

var result = fabonacci(17)
console.log(result);




function fibo(n){

if(n==0){
return 0
}
else if (n==1){
    return 1
}
else{
    return fibo(n-1)+fibo(n-2)
}
}


var rasult=fibo(14)
console.log(rasult);









