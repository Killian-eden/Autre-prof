// alert('à la niche !');

// // commentaire de ligne
// /* commentaire 
// multiligne*/

// // déclarer un variable
// let prenom;

// // var prenom;
// // affecter une valeur 
// prenom = "pixel";
// // afficher dans la console la valeur de la variable 
// console.log(prenom);


// // reafectation
// prenom ="Mila";
// console.log(prenom);

// // type de variables 
// let name = "Harry";
// let age = 11; // integer
// let taille = 1.4; // float
// let parents = false; 

// let joueur1; /*camel case*/ 
// let joueurun; /* snake case */
// // constantes

// const PAYS = "France";

// // Les boites de dialogue
// let info = alert('Info pour le client');
// let question = confirm('Question au client');
// let form = prompt('Champs à renseigner');

// console.log(info);
// console.log(question);
// console.log(form);

// let nom = prompt('Quel est ton nom');
// let age = prompt('Et tu as quel age');
// let date = prompt('Quel année somme nous');
// let naissance = date - age;
// document.write(nom + ' est né en ' + naissance);

// let fruit1 = prompt('Quel fruit avez vous acheté');
// let poids1 = parseFloat(prompt('Quel est le poids de ces fruit ( ne metter pas le kg )'));
// let fruit2 = prompt('Que autre fruit avez vous pris');
// let poids2 = parseFloat(prompt('Quel est le poids de celui ci ( ne metter pas le kg )'));
// let pp = poids1 += poids2;
// document.write('vous avez acheté des ' + fruit1 + ' et des ' + fruit2 + ' pour un poids total de ' + pp + ' kg');
// console.log('vous avez achetez des ' + fruit1 + ' et des ' + fruit2 + ' pour un poids total de ' + pp + ' kg');

// let age = prompt('Quel age a tu');
// let number = age;
// if(age===''){
//     document.write('vous n\'avez pas un répondus')
// }
// else{
//     if(isNaN(number)){
//         document.write('vous n\'avez pas mis un nombre')
//     }
//     else(
//         document.write('Vous avez indiqué avoir ' + age + ' ans')
//     )
// };

// let age = prompt('Quel age a tu');
// let test = age;
// if(age===''){
//     document.write('Vous n\'avez pas répondus');
// }
// else{
//     if(isNaN(test)){
//         document.write('Ce n\'est pas un nombre')
//     }
//     else{
//         if(age>= 16){
//             document.write('bienvenue');
//         }
//         else{
//             document.location.href="https://www.youtube.com/?hl=FR";
//         }
//     }
// }


// let name = 'Harry';
// console.log(typeof(name));

// nombre entier 
// let nb1 = parseInt(prompt("nb ?"));
// let nb2 = prompt("nb ?");

// console.log(typeof(nb1))
// console.log(typeof(nb2))

// let res = nb1 * nb2;
// console.log(res);

// nombre décimal
// let decimal = parseFloat(prompt('nb'));
// console.log(decimal);
// console.log(typeof(decimal))

// convertir un number en string
// let nb = 10;
// let str = nb.toString();
// console.log(nb);
// console.log(str);
// console.log(typeof(nb));
// console.log(typeof(str));

// compter le nombre de lettre d'une string
// let phrase = "si vous etes agités, à la niche !";
// console.log(phrase.length); //33 espace inclus;

// retouner une string en majuscule
// console.log(phrase.toUpperCase())

// retouner en minuscule
// console.log(phrase.toLowerCase())

// extraire un partie d'un string
// console.log(phrase.slice(3, 10))
// slice(ptdepart + 1 , nb de caractère)

// extraire une partie d'une string
// console.log(phrase.substring(3, 10))

