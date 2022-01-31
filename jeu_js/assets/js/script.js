let div1 = document.querySelector(".test1");
let perso = document.getElementById("perso");
let reset = document.getElementById("reset");
let wallleft = document.querySelector(".wallleft");



let x = 900;
let y = 800;


div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
document.getElementById("perso").style.top = y + "px";
document.getElementById("perso").style.left = x + "px";


div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
function movement(){
    document.addEventListener("keyup", function (move) {
        if (move.key === "ArrowUp" || move.key === "z"){
            if (y <= 0){
                y+=50;
                div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
                document.getElementById("perso").style.top = x + "px";
            }
            y-=50;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            document.getElementById("perso").style.top = y + "px";
        }
        else if (move.key === "ArrowDown" || move.key === "s"){
            if (y >= 800){
                y-=50;
                div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
                document.getElementById("perso").style.top = x + "px";
            }
            y+=50;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            document.getElementById("perso").style.top = y + "px";
        }
        else if (move.key === "ArrowRight" || move.key === "d"){
            if (x >= 1800){
                x-=50;
                div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
                document.getElementById("perso").style.top = y + "px";
            }
            x+=50;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            document.getElementById("perso").style.left = x + "px";
        }
        else if (move.key === "ArrowLeft" || move.key === "q"){
            if (x <= 0){
                x+=50;
                div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
                document.getElementById("perso").style.top = y + "px";
            }
            x-=50;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            document.getElementById("perso").style.left = x + "px";
        }
    })
}
movement()





reset.addEventListener("click", function () {
    x = 900;
    y = 800;
    div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
    document.getElementById("perso").style.top = y + "px";
    document.getElementById("perso").style.left = x + "px";
})