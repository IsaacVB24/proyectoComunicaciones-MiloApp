/*
    background-color: #cae8ca;
    border: 2px solid #3d863f;
*/


function respCorrecta(){            
    document.getElementById("mensaje").innerHTML = "¡Felicidades! Respuesta correcta.";
    document.getElementById("mensaje").style.backgroundColor = "#cae8ca";
    document.getElementById("mensaje").style.border = "2px solid #3d863f";
    $("#mensaje").fadeIn(2000);
    $("#mensaje").fadeOut(7000);
}