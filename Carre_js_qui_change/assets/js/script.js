let up = document.getElementById("btnup");
let left = document.getElementById("btnleft");
let right = document.getElementById("btnright");
let down = document.getElementById("btndown");
let square = document.querySelector(".square")

let randomborder = 0;
let x = 0;
let y = 0;
let border = 0;
function randomColor(){
    let allowed = "ABCDEF0123456789", S = "#";

    while(S.length < 7){
        S += allowed.charAt(Math.floor((Math.random()*16)+1));
    }
    return S;
}
function bordernd() {
    square.style.borderRadius = "0px";
    square.style.backgroundColor = randomColor();
    if (randomborder === 0){
        square.style.border = "5px double " + randomColor();
        randomborder++;
    }
    else if (randomborder === 1){
        square.style.border = "5px solid " + randomColor();
        randomborder++;
    }
    else if (randomborder === 2){
        square.style.border = "5px dashed " + randomColor();
        randomborder++;
    }
    else if (randomborder === 3){
        square.style.border = "5px ridge " + randomColor();
        randomborder = 0;
    }
}
function rond(){
    x+= 15;
    square.style.border = "none";
    square.style.left = x + "px";
    square.style.borderRadius = "100px";
    square.style.backgroundColor = randomColor();
}
function leftbtn() {
    x -= 15;
    square.style.left = x + "px";
    bordernd()
}
function bottom(){
    y+=15;
    square.style.top = y + "px";
    bordernd()
}
function upbtn() {
    y-= 15;
    square.style.border = "none";
    square.style.top = y + "px";
    square.style.borderTopRightRadius = "50px"
    square.style.borderBottomLeftRadius = "50px";
    square.style.backgroundColor = randomColor();
}


right.addEventListener("click", rond);
down.addEventListener("click", bottom);
left.addEventListener("click", leftbtn);
up.addEventListener("click", upbtn)