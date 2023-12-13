$(document).ready(function(){
  $('.slick-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
document.addEventListener("DOMContentLoaded", function() {
var enButtons = document.querySelectorAll(".english");

enButtons.forEach(function(button) {
button.addEventListener("click", function() {
  window.location.href = "page2023en.html";
});
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("button")[0];

btn.onclick = function() {
  modal.style.display = "block";
  console.log("bouton cliqué") ;
}

span.onclick = function() {
  modal.style.display = "none";
  console.log("bouton cliqué") ;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var moda = document.getElementById("myModa");
var bt = document.getElementById("myBt");
var spa = document.getElementsByClassName("close")[0];
bt.addEventListener("click" , function(){
  moda.style.display = "block" ;
  console.log("bouton cliqué") ;
})
spa.addEventListener("click" , function(){
  moda.style.display = "none" ;
  console.log("bouton cliqué") ;
})

bt.onclick = function() {
  moda.style.display = "block";
}

spa.onclick = function() {
  moda.style.display = "none";
}
/**si on clique en dehors de l'onglet */
window.onclick = function(event) {
  if (event.target == moda) {
    moda.style.display = "none";
  }
}
});

