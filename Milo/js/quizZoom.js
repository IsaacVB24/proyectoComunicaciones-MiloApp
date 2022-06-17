/*
    background-color: #cae8ca;
    border: 2px solid #3d863f;

    Respuesta incorrecta
    background-color: #e8caca;
    border: 2px solid #863d3d;
*/


function respCorrecta(){
    document.getElementById("mensaje").innerHTML = "¡Felicidades! Respuesta correcta.";
    document.getElementById("mensaje").style.backgroundColor = "#cae8ca";
    document.getElementById("mensaje").style.border = "2px solid #3d863f";
    $("#mensaje").fadeIn(2000);
    $("#mensaje").fadeOut(7000);
}
function respIncorrecta(){            
    document.getElementById("mensaje").innerHTML = "¡Intente de nuevo! Respuesta incorrecta.";
    document.getElementById("mensaje").style.backgroundColor = "#e8caca";
    document.getElementById("mensaje").style.border = "2px solid #863d3d";
    $("#mensaje").fadeIn(2000);
    $("#mensaje").fadeOut(7000);
}