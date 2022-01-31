/**
 * LES CONDITIONS
 */

// --1-- IF ... ELSE IF ... ELSE
if( 1 < 10 ){
    document.write('IF ... SI');
} else if (1 > -10) {
    document.write('ELSE IF ... SINON SI');
} else {
    document.write('ELSE ... SINON');
}

document.write('<hr>');
// --2-- SWITCH

let query = prompt('oui ou non ?');

// switch (query) { 
//     case 'oui': // if
//         document.write('vous avez dit oui');
//         break; // si le cas est TRUE on sort du switch ici

//     case 'non': // else if
//         document.write('vous avez dit non');
//         break; // si le cas est TRUE on sort du switch ici

//     default: // else
//         document.write('réponse non reconnue');
// }


switch (query.toLowerCase()) { 
    case 'oui': // if
    case 'non':
        document.write('vous avez dit oui ou non <hr>');
        break; // si le cas est TRUE on sort du switch ici

    case 'bof': // else if
        document.write('vous avez dit bof <hr>');
        break; // si le cas est TRUE on sort du switch ici

    default: // else
        document.write('réponse non reconnue <hr>');
}