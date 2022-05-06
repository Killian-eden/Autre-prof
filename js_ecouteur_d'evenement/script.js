// 1 - déclarer la variable

let button = document.getElementById("bouton");
let square = document.querySelector(".rose");
let pos = 0;

// 2 - on créer la fonction
function move() {
    square.style.left = pos + "px";
    square.style.backgroundColor = "black";
    pos+= 25;
}
// 3 - Ecouteur d'evenement
button.addEventListener("click", move);

// changer la couleur de fond du carré
// variable.style.backgroundColor
// voir au dessus


// autre écriture
// on écrit la fonction dans l'écouteur
button.addEventListener("click", function () {
    square.style.border = '2px dashed lightblue';
});