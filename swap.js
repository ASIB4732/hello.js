var a =10;
var b =20;
console.log("befor swap:  a =",a,"b =",b);

var put =a;
a=b;
b=put;
console.log("after swap:  a =",a,"b =",b);


var x=5;
var y =7;
console.log("befor swap  x=",x,"y=",y);

x=x+y;
y=x-y;
x=x-y;
console.log("after swap  x=",x,"y=",y);



var p=15;
var q=20;
[p,q]=[q,p]
console.log("after swap  p=",p,"q=",q);