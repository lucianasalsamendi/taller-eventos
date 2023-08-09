document.addEventListener("DOMContentLoaded", function() {
    const botonDiv = document.getElementById("boton"); 
  
    botonDiv.addEventListener("click", function(event) {
        event.stopPropagation();
      });


    botonDiv.addEventListener("click", function() {
    alert("Hola! Soy el botón");
  });


    botonDiv.addEventListener("click", function() {
      alert("Hola! Soy el div");
    });
  });
  

