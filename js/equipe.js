

  document.addEventListener("DOMContentLoaded", function() {

    var enButtons = document.querySelectorAll(".english");

    enButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        window.location.href = "equipeen.html";
      });
    });
    console.log(document.getElementById("myBtn"));
    
    var modal = document.getElementById("myModal");
    
    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("button")[0];
    
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    });
    