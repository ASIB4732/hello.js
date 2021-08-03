var text = "i am a student at intermediat . i like watehing    latest movie and webseris";
var count = [0];

for (i = 0; i < text.length; i++) {
    var car = text[i];
    if (car == " " && text[i-1] !=" ") {
        count++
    }
}


console.log(count);










