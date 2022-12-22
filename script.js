let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var modal = document.getElementById("myModal1");
var img = document.getElementById("myimg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "shaadi.jpg";
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[4];
span.onclick = function() { 
  modal.style.display = "none";
  console.log(hello);
}

var modal = document.getElementById("myModal2");
var img = document.getElementById("myimg1");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "card.jpg";
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[4];
span.onclick = function() { 
  modal.style.display = "none";
  console.log(hello);
}

var modal = document.getElementById("myModal3");
var img = document.getElementById("myimg2");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "dj.jpeg";
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[4];
span.onclick = function() { 
  modal.style.display = "none";
  console.log(hello);
}

var modal = document.getElementById("myModal4");
var img = document.getElementById("myimg3");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption4");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "th.jpeg";
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[4];
span.onclick = function() { 
  modal.style.display = "none";
  console.log(hello);
}

var modal = document.getElementById("myModal5");
var img = document.getElementById("myimg4");
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption5");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "wedd.jpeg";
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[4];
span.onclick = function() { 
  modal.style.display = "none";
  console.log(hello);
}

const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function setActive(i){
    for(slide of slides)
    slide.classList.remove('active');
    slides[i].classList.add('active');
    for(dot of dots)
    dot.classList.remove('active');
    dots[i].classList.add('active');
}

for(let j=0;j<dots.length;j++){
    dots[j].addEventListener('click',function(){
        setActive(j);
    })
}