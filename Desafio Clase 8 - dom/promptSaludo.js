//DESAFIO CLASE 8 - Interectuar con HTML



/*------------------------------------------------------------------------ */


//CREO UN PROMPT DE SALUDO EN EL HOME

const titulo = document.getElementById("titulo") //tomo el id de la etiqueta del html con getElement
console.log( titulo.innerText ) // “Bienvenido al home"

// cambio el contenido del elemento
titulo.innerText = `Hola ` + prompt("Ingrese su nombre" ) + `!`
console.log( titulo.innerText ) 


/*------------------------------------------------------------------------ */