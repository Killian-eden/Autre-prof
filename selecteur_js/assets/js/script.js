let id1 = document.getElementById("section1");

id1.onclick = function () {
    alert(id1.innerHTML);
}
let span = document.getElementsByTagName("span");
span[0].onclick = function () {
    alert(span[0].innerHTML);
}

/*let classes = document.getElementsByClassName("lesDiv");
for (let i = 0; i <= classes.length; i++){
    classes[i].onclick = function(){
        alert(classes[i].innerHTML);
    }
}*/

/*let p = document.querySelectorAll("p");
p[0].onclick = function () {
    p[0].style.color = "blue";
}
for (let i = 1; i<= p.length; i++){
    p[i].onclick = function () {
        p[i].style.color = "red";
    }
}*/

/*function randomColor(){
    let allowed = "ABCDEF0123456789", S = "#";

    while(S.length < 7){
        S += allowed.charAt(Math.floor((Math.random()*16)+1));
    }
    return S;
}

let art = document.querySelectorAll("article");
for (let i = 0; i <= art.length; i++){
    art[i].onclick = function () {
        art[i].style.color = randomColor();
    }
}*/

let gg = document.getElementById("google");
gg.href = "https://www.youtube.com/";