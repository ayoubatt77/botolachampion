let closebtn = document.getElementById('closebtn');
let openbtn = document.getElementById('openbtn');
let navbar = document.getElementById('navbar');
let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');
let link4 = document.getElementById('link4');
let banner= document.querySelector('.banner');
let loader = document.getElementById('loader');

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

function sitetime() {
    setTimeout(() => {
        loader.classList.add('hide');
        document.querySelector('.banner').style.opacity="1";
        document.getElementById('navbar').style.opacity="1";
        
    },5000);
}

link1.onclick = function ( ){
    
    navbar.classList.add('hide');
    closebtn.classList.add('hide');
    openbtn.classList.remove('hide');
}
link2.onclick = function ( ){

    navbar.classList.add('hide');
    closebtn.classList.add('hide');
    openbtn.classList.remove('hide');
}
link3.onclick = function ( ){

    navbar.classList.add('hide');
    closebtn.classList.add('hide');
    openbtn.classList.remove('hide');
}
link4.onclick = function ( ){

    navbar.classList.add('hide');
    closebtn.classList.add('hide');
    openbtn.classList.remove('hide');
}



onload = function () {
    navbar.classList.add('hide')
    closebtn.classList.add('hide');

    sitetime();


}

closebtn.onclick = function () {
    
    navbar.classList.add('hide');
    closebtn.classList.add('hide');

    openbtn.classList.remove('hide');

}

openbtn.onclick = function () {
    
    navbar.classList.remove('hide');
    closebtn.classList.remove('hide');
    this.classList.add('hide');

    audio.play();
    
}

