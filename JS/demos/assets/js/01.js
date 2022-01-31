// alert('à la niche !');

// commentaire de ligne

/*
commentaire de
plusieurs
lignes
*/


// /* 1- declarer une variable */ 
// let prenom; 
// // var prenom;

// let joueur;
// let joueur_1; /* SNAKE CASE */
// let joueurUn; /* CAMEL CASE */

// // 2- affecter une valeur
// prenom = "Pixel";

// // 3- afficher dans la console la valeur de la variable
// console.log(prenom);

// 4- réaffectation
// prenom = "Mila";
// console.log(prenom);

// 5- types de variables
// let name = "Harry";
// let age = 11; // integer
// let taille = 1.4; // float
// let parents = false;

// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(taille));
// console.log(typeof(parents));

// 6- constantes
// const PAYS = "France";

// 7- Les boites de dialogue
/*let info = alert('Info pour le client');
let question = confirm('Question au client');
let form = prompt('Champs à rensigner');

console.log(info);
console.log(question);
console.log(form);*/

// EXO
// Afficher dans la page (ou la console) le prénom renseigné par l'utilisateur suivi de ', à la niche !'
// let tonPrenom = prompt('Quel est ton prénom ?');
// let msg = ', à la niche !';
// document.write(tonPrenom + msg);
// console.log(tonPrenom, msg);

/**
 * Opérations sur les variables
 */
// connaître le type
// let name = 'Harry';
// console.log(typeof(name));

// retourne un entier à partir d'une chaine de caractères
// let nb1 = parseInt(prompt('nb ?'));
// let nb2 = prompt('nb ?');

// console.log(typeof(nb1));
// console.log(typeof(nb2));

// let res = nb1 * nb2;
// console.log(res);


// Exercice :
/* Demandez l'âge de l'internaute dans un prompt.
   Si la réponse est vide (on compare avec des quotes vides SANS espace), on affiche "Vous n'avez pas répondu."
   Si la réponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un nombre." (rechercher isNaN)
   Si la réponse est correcte, on affiche "Vous avez indiqué avoir X ans." où X est l'âge donné par l'internaute.
*/

// let age = ( prompt('Quel âge avez-vous ? ') );

// if (age == '' || age === null) {// age est-il vide ?
//     document.write('répondez svp !')
// } else if ( isNaN(age) ) {
//     document.write('Vous n\'avez pas indiqué un nombre<br><hr>');
// } else {
//     document.write('Vous avez indiqué avoir '+ age + ' ans<br><hr>');
// }

// retourne un chiffre décimal à partir d'une chaine de caractères
// let decimal = parseFloat(prompt('nb'));
// console.log(decimal);
// console.log(typeof(decimal));

// convertir un Number en String
// let nb = 10;
// let str = nb.toString();
// console.log(nb);
// console.log(str);
// console.log(typeof(nb));
// console.log(typeof(str));

// -- compter le nb de lettres d'une string
// let phrase = "Si vous êtes agités, à la niche !";
// console.log(phrase.length); // 33 espaces inclus

// -- retourner une string en MAJ
// console.log(phrase.toUpperCase());

// -- retourner une string en minuscules
// console.log(phrase.toLowerCase());

// -- extraire une partie d'une string
// console.log(phrase.slice(3, 10));
// slice(pt départ, pt arrivée)

// -- extraire une partie d'une string
// console.log(phrase.substring(3, 10));
