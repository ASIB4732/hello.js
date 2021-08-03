

function fecktor(x) {
    if(x==1){
        return 1;
    }
    else{
        return x= x*fecktor(x-1)
    }
    
}
var result =fecktor(11);
console.log(result);








