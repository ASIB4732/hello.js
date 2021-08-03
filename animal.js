



function animalcalcolator(numberOfAnimal) {
var count =0;
if(numberOfAnimal<=10){
    count=numberOfAnimal*50;
}
else if (numberOfAnimal<=20){
    var firstpart = 10*50;
    var elemont =numberOfAnimal-10;
    var sacandpart =elemont*100;
    count =firstpart+sacandpart;

}
else{
    var firstpart = 10*50;
    var sacandpart = 10*100;
    var elemont = numberOfAnimal-20;
    var thiedpart =elemont*300;
    count=firstpart+sacandpart+thiedpart;
}
return count;
}




var output=animalcalcolator(22)



console.log(output);












