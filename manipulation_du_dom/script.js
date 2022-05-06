/*let link = document.getElementById("google");
let link = document.getElementsByClassName("google")
let link = document.getElementsByTagName("a");
let link = document.querySelector(".google");*/
let link = document.querySelector("#google");
/*let link = document.querySelectorAll("a");*/
console.log(link);

// -- accéder au lien vers lequel pointe la balise
console.log(link.href);

// -- accéder à l'ID
console.log(link.id);

// -- accéder à la classe
console.log(link.className);
// -- accéder au texte/contenu de la balise
console.log(link.textContent);
// -- modifier le contenu
link.textContent = "Allez chez EDEN Schoooooooooooooooooool";
// ------------------------------
// -- créer un nouvel élément
let span = document.createElement("span");

// -- lui donner un ID
span.id = "unSpan";

// -- lui ajouter du contenu
span.textContent = "Friday Yay !";

// -- l'insérer dans le HTML
link.appendChild(span);

let main = document.querySelector("main");
let a = document.createElement("a");
let h2 = document.createElement("h2");
a.textContent = "A la niche";
a.href = "https://www.youtube.com/";
a.style.textDecoration = "none";
a.style.color = "red";
main.appendChild(h2).appendChild(a);


