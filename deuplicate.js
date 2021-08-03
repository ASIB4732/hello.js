var number = [1, 2, 5, 4, 6, 87, 4, 52, 4, 5, 4, 21, 4, 4, 1, 52, 8, 4, 5, 4, 55, 4, 5, 5, 5, 85, 55, 4, 1, 45, 547, 52, 1, 52, 5, ];
var uniqnumber = [0];

for (i = 0; i < number.length; i++) {
    var eliment = number[i];
    var net = uniqnumber.indexOf(eliment);
    if (net == -1) {
        uniqnumber.push(eliment);
    }
}

console.log(uniqnumber);