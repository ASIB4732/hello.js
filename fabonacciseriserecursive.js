function fabonacci(n) {
    if (n == 0) {
        return [0]
    } 
    else if (n == 1) {
        return [0,1]
    }
     else {
     
        var fabo = fabonacci(n-1)
        var nono =fabo[n-1]+fabo[n-2];

        fabo.push(nono);
        return fabo;
    }
}

var result = fabonacci(15)
console.log(result);