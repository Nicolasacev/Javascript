import { carrito } from "./carrito.js";

//GUARDAR EN LOCAL STORAGE
 function guardarEnLS() {
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

//TRAER LO QUE HAY EN LOCAL STORAGE
function traerLS() {
  const storage = JSON.parse(localStorage.getItem('carrito'));
  return storage
}
export {guardarEnLS, traerLS}