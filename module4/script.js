// // zet de functie om naar een arrow functie
// const ikRockArrowFunctions = function() {
//     console.log("Joe, ik rock de arrow functions!");
// };

// ikRockArrowFunctions()

// ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");

// () => x + 2;

// add5 = x => x + 5;
// add5(4); // 9 

// createObject = () => {
//     { greeting: "hoi" }
// }

const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    console.log("Dit is de gehele persoon:", [person.name], );
}
for (let person of array) {
    console.log("Dit zijn de geboorte jaren:", 2020 - [person.age]);
};
for (let person of array) {
    console.log([person.name], "is een:", [person.profession]);
}
for (let person of array) {
    if (person.age >= 50) {
        console.log([person.name], "is ouder dan 50");
    } else {
        console.log([person.name], "is jonger dan 50");
    }
}