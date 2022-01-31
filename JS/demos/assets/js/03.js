// --1-- TANT QUE // WHILE

/*
variable pour compter les tours

tant que (condition si TRUE){
    code à répéter ...
    ...

    incrémentation du compteur (pour passer au tour de boucle suivant)
}
*/
let i = 0; // compteur initialisé à 0

// while( i <= 5 ){ // tant que i est inférieur ou égal à 5
//     document.write(i + '<br>');

//     // incrémentation
//     i++;
// }

while( i <= 5 ){ // tant que i est inférieur ou égal à 5
    if( i % 2 == 0) { // valeur de i est paire
        document.write('<p style="color: blue;">' + i + '</p>');
    } else { // sinon si i est impaire
        document.write('<p style="color: red;">' + i + '</p>');
    }

    // incrémentation
    i++;
}


// --2-- boucle FOR / POUR

/*
pour (initialisation compteur ; condition ; incrémentation){
    ... script à répeter ...
}
*/
for(let i = 0; i <= 5; i++){
    document.write(i + '<br>');
}

