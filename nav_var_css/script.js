let switchColor = document.getElementById("modeSombre");
let ul = document.querySelector("ul");
let a = document.querySelector("a");
let root = document.documentElement;
let body = document.querySelector("body");
let button = document.getElementById("colorChange");
let circle = document.getElementById("colorButton");
let varJS = "black";
let varJS2 = "white";
let varJS3 = "black";
let varJS4 = "white";
let i = 0;
function blackmode(){
    root.style.setProperty("--default", varJS);
    root.style.setProperty("--color", varJS2);
    root.style.setProperty("--color-back-btn", varJS3);
    root.style.setProperty("--color-front-btn", varJS4);
    circle.style.animation = "anim var(--transition) both";    if ( i === 0){
        varJS = ul.style.backgroundColor;
        varJS2 = a.style.color;
        varJS3 = button.style.backgroundColor;
        varJS4 = circle.style.backgroundColor;
        switchColor.innerText = "Mode clair";
        body.style.backgroundColor = "darkgrey";
        circle.style.animation = "anim 2s both";
        i = 1;
    }
    else{
        varJS = "black";
        varJS2 = "white";
        varJS3 = "black";
        varJS4 = "white";
        switchColor.innerText = "Mode sombre";
        body.style.backgroundColor = "white";
        circle.style.animation = "anim-return 2s both";
        i = 0;
    }
}
switchColor.addEventListener("click", blackmode);
button.addEventListener("click", blackmode);