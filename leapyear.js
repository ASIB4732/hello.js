var year = 2004;
var leap = year % 4;
if (leap == 0){
console.log("YOUR YEAR IS LEAPYEAR ...");
}
else{
    console.log("YOUR YEAR IS NOT LEAPYEAR ...");
    }


function setyear(year) {
    var leapyear = year % 4;
    if (leapyear == 0){
        console.log("your year is leapyear");
    }
    else{
        console.log("your year is not leapyear");
    }
}
setyear(2001);
setyear(2002);
setyear(2003);
setyear(2004);