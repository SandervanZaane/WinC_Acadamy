// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function() {
    console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions()

ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");

() => x + 2;

add5 = x => x + 5;
add5(4); // 9 

createObject = () => {
    { greeting: "hoi" }
}