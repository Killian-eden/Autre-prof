let nospoil = document.querySelectorAll('.nospoil');
let desc = document.querySelectorAll('.description');
for(let i=0; i<= desc.length; i++){
        nospoil[i].addEventListener('click', function(){
        desc[i].classList.toggle('activated');
    });
}