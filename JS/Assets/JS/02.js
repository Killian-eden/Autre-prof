// les condition
//  1 if ... else if ... else
// if( 1 < 10){
//     document.write('IF ... SI');
// } else if(1>-10){
//     document.write('ELSE IF ... SINON SI');
// } else{
//     document.write('ELSE ... SINON');
// }



// 2 switch

// let query = prompt('oui ou non ?')

// switch(query){ 
//     case'oui': //if
//         document.write('vous avez dit oui');
//         break; //si le cas est TRUE on sort du switch ici

//     case 'non': //else if
//         document.write('vous avez dit non');
//         break;

//     default: //else
//         document.write('réponse non reconnue')
// }

// let choix = prompt('Tu préfère les frite, les fraise, le foot');

// switch(choix){
//     case'frite':
//         document.write('Tu préfère les frite');
//         break;
//     case'fraise':
//         document.write('Tu préfère les fraise')
//         break;
//     case'foot':
//         document.write('Tu préfère le foot')
//         break;
//     default:
//         document.write('Tu n\'a pas répondus a la question')
// }

// 1 TANT QUE // WHILE

// variable pour compter les tours

// tant que (condition si TRUE){
//     code a répéter ...
//     ...

//     incrémentation du compteur(pour passer au tour de boucle suivant)
// }

// let i = 0; // compteur initialiser a zero
// while(i<=5){// tant que i est inférieur ou egal a 5
//     if(i%2 == 0){
//         document.write('<p style="color:blue">' + i + '</p>')
//     }
//     else{
//         document.write('<p style="color:red">' + i + '</p>')
//     }
//     i++;    
//     // incrémentation
//     console.log(i)
// }

// // 2 boucle FOR /POUR
// // pour initialiser compteur; condition script a répeter
// for(let = 0; i <= 5; i++){
//     document.write(i + '<br>')
// }
// console.log(i)

// let star = '*';
// for(let i =0; i<=5; i++){
//     document.write(star + '<br>');
//     star += '*';
// }

// let tag ='*';
// for(i=5 ; i > 0 ; i--){
//     for(j=0 ; j < i ;j++){
//         document.write(`<span> ${tag} </span>`);
//     }
//     document.write('<br>');
// }



// document.write('<select>');
//     for(let a = 2021; a>=1900 ; a--){
//         document.write('<option>' + a +'</option>');
//     }
// document.write('</select>');


