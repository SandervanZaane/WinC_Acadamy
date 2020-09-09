// for (let counter = 0; counter < 21; counter++) {
//     if (counter % 2 === 0) {
//         console.log(counter + ' is even');
//     } else {
//         console.log(counter + ' is odd');
//     }
// }

// for (let keerGetal = 0; keerGetal < 11; keerGetal++) {
//     for (let tafel = 0; tafel < 11; tafel++) {
//         antwoord = keerGetal * tafel;
//         console.log(antwoord);
//     }
// }

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 50; i <= 100; i++) {
    console.log('For ' + i + ', you got a ' + assignGrade(i));
}