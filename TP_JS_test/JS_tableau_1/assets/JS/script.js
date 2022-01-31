let favFoods = ["Steak hachée", "Riz", "Pates"];
document.write(favFoods[1] + "<br>");
favFoods.splice(2,1, "Frite");
let ancienFavFoods = favFoods.shift();
document.write(favFoods + "<br>" + ancienFavFoods + "<br>");
favFoods.push("pepene");
document.write(favFoods + "<br>");
favFoods.unshift("daniel");
document.write(favFoods + "<br>");

let vide = [];
vide.pop;
document.write(vide);
// sa fait rien

let nbr = [2, 3, 4, 5];
nbr.splice(1,1);
document.write(nbr + "<br>");

let alpha = ["alpha", "gamma", "delta"];
alpha.splice(1, 0, ["beta"]);
document.write(alpha + "<br>")

let moins = [10,-10,-5,-3,2,1];
moins.splice(0, 5, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
document.write(moins + "<br>")