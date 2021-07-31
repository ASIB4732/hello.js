var appeleprice =12000;
var mangoAsay = true;

if(appeleprice <1500 && mangoAsay == true){
    console.log("i well eat this food")
}
else if(appeleprice <1500 || mangoAsay == true){
    console.log("daki ki kora jay")
}
else{
    console.log("i am not interest of this food")
}
 

var date = new Date('7/28/2021')
console.log(date);

var tomarkasyKitakaASy = false;
var tomrkasykotoasy = 50000;
var education ="intermadiat";

if(tomarkasyKitakaASy == false && tomrkasykotoasy  >500000){
console.log("tomi to sara");
}
if(tomarkasyKitakaASy == false || tomrkasykotoasy  >500000){
    console.log("kiso bolta partasi na");
    }
else{
    console.log("tomar thik nay");
}


var old = [10,20,30,40,50,60,70,80,90,11,22];
console.log(old);
console.log(old.length);
old.push(100,200)
console.log(old);
old.pop()
console.log(old);
old.shift()
console.log(old);
old.unshift(500000)
console.log(old);

console.log(old.length);
var asd =old.slice(2);
console.log(asd);


var no1 ={id:5137, number:013034744140,name:"asibur rahman",home:"kasba"};
var no2 ={id:5115, number:01303474462,name:"nahid",home:"b-para"};

var phonenumber =no1.number;
no2.number=11111;
no2.watching="movie and web series";


console.log(phonenumber);
console.log(no2);







function lipyear(year){
var calcolation=year*4;
if(calcolation == 0){
    console.log("this year is leapyear");
}
else{
    console.log("this year is not leapyear");
}
}

lipyear(2004)



var abcd =0;
while(abcd<10){
abcd++
console.log(abcd);
}



function fectoreal(n){
    if(n ==0){
return 1;
    }
    else{
        return n*fectoreal(n-1)
    }
}


var result=fectoreal(21);
console.log(result);


