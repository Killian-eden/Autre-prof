/*
 * But : il faut utiliser les fonctions écrites au-dessus pour générer les
 * chaînes de caractères attendues, en utilisant chaque fois le
 * moins de code possible.
 *
 * La chaîne de caractères sera stockée dans la variable result et cette
 * variable affichée dans la console.
 *
 * Chaîne #1 : A
 * Chaîne #2 : AC
 * Chaîne #3 : ABBCCC
 * Chaîne #4 : CBCBA
 * Chaîne #5 : CB!C CB!B CB!A
 */
function letterA() {
    return "A";
}

function letterB() {
    return "B";
}

function letterC() {
    return "C";
}

let index;
let result;

// A
//result = letterA();
// AC
//result = letterA() + letterC();
// ABBCCC
/*result = '';
for (let i = 0; i < 6; i++){
    if (i === 0){
        result += letterA();
    }
    else if (i >= 1 && i <= 2){
        result += letterB();
    }
    else {
        result += letterC();
    }
}*/
// CBCBA
/*result = "";
index = letterC() + letterB();
for (let i = 0; i < 3; i++){
    if (i >= 0 && i <2){
        result += index;
    }
    else {
        result += letterA();
    }
}*/
// CB!C CB!B CB!A
/*index = letterC() + letterB() + "!";
result = index;
for (let i = 0; i <= 2; i++){
    if (i === 0){
        result += letterC();
    }
    else if (i === 1){
        result += letterB();
    }
    else{
        result += letterA();
    }
    if (i < 2){
        result += " " + index;
    }
}*/

console.log(result);
