
function jugar(){
    let numeroX = Math.floor(Math.random()*10);
    let numeroY
    
    do{
    numeroY = parseInt(prompt("Introduce un valor del 0 al 10"));
    console.log(numeroX)
    console.log(numeroY)
    
    if (isNaN(numeroY)) alert("Tienes que poner un número válido. Intenta otra vez")
    else
    if (numeroX===numeroY) alert("Exacto! Lo has adivinado. Felicidades");  
    if (numeroX<numeroY) alert("Te has pasado! Prueba un número más bajo.");
    if (numeroX>numeroY) alert("Lo siento... prueba un número más alto.");
    
    }while((numeroX!==numeroY));
}





