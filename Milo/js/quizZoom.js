function respCorrecta() {  
    alert (" Respuesta correcta, Felicidades");
    setTimeout("repCorrecta()", 3000);
    clearTimeout("respCorrecta()");
}  
function respIncorrecta() {  
    alert (" No es la respuesta correcta, intente con otra opción");  
}