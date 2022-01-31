/*
 * EXERCICE
 * Array - Best Friends
 *

let people = ["Greg", "Mary", "Devon", "James"];

    1- Avec une boucle, parcourir le tableau pour afficher tous les prénoms dans la console
    2- Supprimer "Greg" du tableau > afficher.
    3- Supprimer "James" du tableau > afficher.
    4- Ajouter "Matt" en début de tableau > afficher.
    5- Ajouter votre prénom en fin de tableau > afficher.
    6- Avec une boucle, parcourir le tableau pour afficher tous les prénoms dans la console jusqu'à "Mary" puis sortir de la boucle (petite recherche à faire).
    7- Faire une copie du tableau avec slice : cette copie ne doit PAS inclure ni "Mary" ni "Matt".
    8- Trouver l'indice de "Mary".
    9- Trouver l'indice de "Foo" (le résultat devrait être -1).
    10- Redéfinir la variable avec le tableau de départ : let people = ["Greg", "Mary", "Devon", "James"];.
    Avec la propriété splice, supprimer "Devon" et ajouter "Elizabeth" et "Artie". Le résultat attendu est le suivant >> ["Greg", "Mary", "Elizabeth", "Artie", "James"].
    11- Créer une nouvelle variable appelée withBob contenant le tableau people concaténé avec la string "Bob".


 */
let people = ["Greg", "Mary", "Devon", "James"];
/*
1-
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

2-
people.shift();
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

3-
people.pop();
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

4-
people.unshift("Matt");
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

5-
people.push("Killian");
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

6-
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
    if (people[i] === "Mary"){
        break;
    }
}

7-
let copie = people.slice(0,3);
copie.splice(1,1);
console.log(copie);

8-
console.log(people.indexOf("Mary"));

9-
console.log(people.indexOf("Foo"));

10-
people.splice(2,1,"Elizabeth","Artie");
console.log(people)

11-
let withBob = people + "Bob";
console.log(withBob)
*/
