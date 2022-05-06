// exo 1
/*let nbr = parseInt(prompt("Choisir un nombre"));
let random = Math.floor(Math.random()*20) + 1;
if (isNaN(nbr)){
    console.log("Il y as une erreur")
}
else {
    if (nbr > random){
        console.log("Vous avez gagner")
    }
    else if (nbr < random){
        console.log("Vous avez perdu")
    }
    else {
        console.log("Match Nul")
    }
}*/

// exo 2
/*
function exo2() {
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    let nbr2 = parseInt(prompt("Choisir un autre nombre"));
    if (isNaN(nbr1) || isNaN(nbr2)){
        return "Il y as une erreur";
    }
    else {
        return nbr1 + nbr2;
    }
}
*/

// exo 3
/*
function exo3() {
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    if (isNaN(nbr1)){
        return "Il y as une erreur";
    }
    else {
        return nbr1 * 60;
    }
}*/

// exo 4
/*
function exo4() {
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    if (isNaN(nbr1)){
        return "Il y as une erreur";
    }
    else {
        nbr1 += 20;
        return nbr1;
    }
}
console.log(exo4())*/

// exo 5
/*
function exo5() {
    let base = parseInt(prompt("Donner la base"));
    let hauteur = parseInt(prompt("Donner la hauteur"));
    if (isNaN(base)||isNaN(hauteur)){
        return "Il y as une erreur";
    }
    else {
        return base * hauteur / 2 ;
    }
}
console.log(exo5())*/

// exo 6
/*
function exo6(tablo) {
    return tablo.split('').reverse().join('');
}
console.log(exo6("hello"));*/

// exo 7

// exo 8
/*
function exo8(tablo) {
    let first = tablo.length;
    return tablo[first - 1];
}
console.log(exo8(["hello", "tout", "le", "monde"]));*/

// exo 9
/*
function exo9() {
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    let nbr2 = parseInt(prompt("Choisir un autre nombre"));
    if (isNaN(nbr1) || isNaN(nbr2)){
        return "Il y as une erreur";
    }
    else {
        return nbr1 / nbr2;
    }
}
console.log(exo9());*/

// exo 10
/*let nbr1 = parseInt(prompt("Choisir un nombre"));
let nbr2 = parseInt(prompt("Choisir un autre nombre"));
if (isNaN(nbr1) || isNaN(nbr2)){
    console.log("Il y as une erreur")
}
else {
    if (nbr1 + nbr2 < 100){
        document.write("True".fontcolor("green"));
    }
    else {
        document.write("False".fontcolor("red"));
    }
}*/

// exo 11
/*
function exo11() {
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    if (isNaN(nbr1)){
        return "Il y as une erreur";
    }
    else {
        if (nbr1 <= 0){
            console.log("True");
        }
        else {
            console.log("False");
        }
    }
}
console.log(exo11());*/

// exo 12
/*
function exo12() {
    let choix1 = prompt("Choisir un");
    let choix2 = prompt("Choisir deux");
    if (choix1 == choix2){
        console.log("True");
    }
    else {
        console.log("False");
    }
}
console.log(exo12());*/

// exo 13
/*
let html = document.querySelector("html")
function exo13() {
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    if (isNaN(nbr1)){
        return "Il y as une erreur";
    }
    else {
        if (nbr1 % 5 === 0){
            console.log("True");
            html.style.backgroundColor = "green";
        }
        else {
            console.log("False");
            html.style.backgroundColor = "red";
        }
    }
}
console.log(exo13());*/

// exo 14
/*
function exo13() {
    let nbr1 = parseInt(prompt("Choisir un l'heure"));
    let nbr2 = parseInt(prompt("Choisir un les minute"));
    if (isNaN(nbr1) || isNaN(nbr2)){
        return "Il y as une erreur";
    }
    else {
        return nbr1 * 60 * 60 + nbr2 * 60;
    }
}
console.log(exo13());*/

// exo 15

// exo 16
/*
function exo16(tablo) {
    return tablo[tablo.length - 1];
}
console.log(exo16(["1", "2", "3"]))*/

// exo 17

/*
function exo17(tablo) {
    let middle = parseInt(tablo.length / 2);
    if (middle + middle === tablo.length){
        return tablo[middle - 1]
    }
    else {
        return tablo[middle]
    }
}
console.log(exo17(["1", "2", "3", "4", "5"]))*/

// exo 18
