// initialisation des variables
/* jshint expr: true */
var centi = 0;
var mili = 0;
var sec = 0;
var sec_;
var afficher;
var compteur;

// affichage du compteur à 0
document.getElementById('time').innerHTML = "0" + sec + ":" + "0" + mili;



function chrono() {
    setInterval(function (){
        mili++;
        if (mili > 9) {
            mili = 0;
        }
    }, 1);

    centi++;
    centi*10;//=======pour passer en dixièmes de sec
    //=== on remet à zéro quand on passe à 1seconde
    if (centi > 9) {
        centi = 0;
        sec++;
    }

    if (sec < 10) {
        sec_ = "0" + sec;
    }
    else {
        sec_ = sec;
    }

    afficher = sec_ + ":" + centi + mili;
    document.getElementById("time").innerHTML = afficher;

    reglage = window.setTimeout("chrono();",100);
}


function debut()  //== Activation et désactivation des boutons
{
    document.parametre.lance.disabled = "disabled";
    document.parametre.pause.disabled = "";
    document.parametre.zero.disabled = "";
}
function arret()
{
    window.clearTimeout(reglage);
    document.parametre.lance.disabled = "";
    document.parametre.pause.disabled = "disabled";
    document.parametre.zero.disabled = "";
}

function raz() //====pour remettre à zéro
{
    document.parametre.zero.disabled = "disabled";

    centi = 0;
    mili = 0;
    sec = 0;

    afficher = sec + "0:" + centi + mili;
    document.getElementById("time").innerHTML = afficher;
    document.getElementById('presenter').style.visibility='hidden';

}

