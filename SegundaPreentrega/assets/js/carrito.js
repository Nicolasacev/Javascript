//EVENTOS: contador en boton de carrito


const contadorCarrito = document.querySelector(".contadorCarrito")
const botonCarrito = document.querySelectorAll("#agregarCarrito")

let contador = 0

botonCarrito.forEach(element => {
    element.addEventListener("click", () => { 
        console.log("soy el listener")
        contador++
        contadorCarrito.innerHTML = `${contador}`
        carritoStorage(contador);
    });
});

