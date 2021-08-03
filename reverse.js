

function result(n) {
    var revarce = "";
    for (i = 0; i < n.length; i++) {
        var aliment = n[i];
        revarce= aliment+revarce;
    }
    return revarce;
}


var num = " i am a good boy";
var output=result(num);
console.log(output);















