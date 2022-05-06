let div1 = document.querySelector(".test1");
let perso = document.getElementById("perso");
let reset = document.getElementById("reset");
let wall1 = document.querySelector(".wallleft");
let wall2 = document.querySelector(".walltopright");
let wall3 = document.querySelector(".walltopleft");
let wall4 = document.querySelector(".wallright");
let wall5 = document.querySelector(".wallbottom");
let end = document.querySelector(".end");
let endimg = document.querySelector(".endimg")

let x = 900;
let y = 800;


div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
document.getElementById("perso").style.top = y + "px";
document.getElementById("perso").style.left = x + "px";


div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
function movement(){
    document.addEventListener("keyup", function (move) {
        if (x === 900 && y === 0 || move.key === "Enter"){
            div1.style.display = "none";
            perso.style.display = "none";
            reset.style.display = "none";
            wall1.style.display = "none";
            wall2.style.display = "none";
            wall3.style.display = "none";
            wall4.style.display = "none";
            wall5.style.display = "none";
            endimg.style.display = "block";
            end.style.display = "block";
        }
        else if (move.key === "ArrowUp" || move.key === "z"){
            if (y <= 100){
                if (x === 900){
                    div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
                    document.getElementById("perso").style.top = y + "px";
                }
                else {
                    y+=50;
                    div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
                    document.getElementById("perso").style.top = x + "px";
                }
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
            if (x >= 1800 || x === 900 && y === 0 || y === 50){
                x-=50;
                div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
                document.getElementById("perso").style.top = y + "px";
            }
            x+=50;
            div1.textContent = "Vous etes en x = " + x + " et en y = "  + y;
            document.getElementById("perso").style.left = x + "px";
        }
        else if (move.key === "ArrowLeft" || move.key === "q"){
            if (x <= 0 || x === 900 && y === 0 || y === 50){
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