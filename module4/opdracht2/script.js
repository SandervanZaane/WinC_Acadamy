// // A 

// function addTheWordCool(array) {
//     console.log(array.push("cool"))
//     return array;
// }


// console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// // resultaat: ["nice", "awesome", "tof", "cool"]

// // B

// function amountOfElementsInArray(fruits) {
//     console.log(fruits.length);
// }
// console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// // 3

// // C 
// selectBelgiumFromBenelux = array2 => array2.shift();
// console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

// // D
// lastElementInArray = (animals) => animals.slice(-1).pop();

// console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// // E

// const presidents = ["Trump", "Obama", "Bush", "Clinton"]

// const impeachTrumpSlice = function(array2) {
//     return array2.slice(1);
// }
// const impeachTrumpSplice = function(array3) {
//     return array3.splice(1, 0, "");
// }

// console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
// console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// // F 
// function stringsTogether(sentenceArr) {
//     return sentenceArr[0].concat(sentenceArr[1], sentenceArr[2], sentenceArr[3], sentenceArr[4]);
// }

// console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//     //resultaat: "Winc Academy is leuk ;-}"

// // G

const Arrays = ([1, 2, 3], [4, 5, 6]);

const combined = [...Arrays[0], ...Arrays[1]];

console.log(combined);

// resultaat: [1,2,3,4,5,6]