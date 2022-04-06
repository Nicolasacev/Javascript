//DESAFIO CLASE 8 - Interectuar con HTML

/*------------------------------------------------------------------------ */


//CREACIÓN DE ELEMENTOS

//Cambio el texto del parraafo de la pagina nosotros.html 


let parrafoSobreNos= document.createElement("div");

const parrafosobre= document.getElementById("nosotros") //tomo el id de la etiqueta del html


parrafoSobreNos.innerHTML = `<p>Crash parts en una empresa joven especializada en la venta por mayor y menor de repuestos de colision. proveemos marcas originales para que puedas reparar tu vehiculo con las piezas originales usadas en la fabricacion del vehiculo.Trabajamos con compañias de seguro y tambien particulares. Acercate y conocenos!</p> `; //uso de literals
parrafosobre.append(parrafoSobreNos);


/*------------------------------------------------------------------------ */


