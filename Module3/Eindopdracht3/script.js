// opdracht 4 

// change backgroundcolor by clicking menu-items

let buttonGreen = document.getElementById("green");
let buttonRed = document.getElementById("red");
let buttonBlue = document.getElementById("blue");
let buttonYellow = document.getElementById("yellow");
let body = document.body;
let nav = document.querySelector("nav");


buttonGreen.addEventListener("click", function() {
    body.classList.add("green-background");
    body.classList.remove("blue-background", "red-background", "yellow-background");
    nav.classList.toggle("hidden");
});

buttonRed.addEventListener("click", function() {
    body.classList.add("red-background");
    body.classList.remove("green-background", "blue-background", "yellow-background");
    nav.classList.toggle("hidden");
});

buttonBlue.addEventListener("click", function() {
    body.classList.add("blue-background");
    body.classList.remove("green-background", "red-background", "yellow-background");
    nav.classList.toggle("hidden");
});

buttonYellow.addEventListener("click", function() {
    body.classList.add("yellow-background");
    body.classList.remove("green-background", "red-background", "blue-background");
    nav.classList.toggle("hidden");
});

// show menu toggle

let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function() {
    nav.classList.toggle("hidden");
})