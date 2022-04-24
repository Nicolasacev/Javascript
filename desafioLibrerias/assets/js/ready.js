//apenas carga la pagina nos trae el almacenamiento del contador 

window.onload = () => {
   const producto2 = JSON.parse(localStorage.getItem('enCarrito'));
   contadorCarrito.textContent = producto2
}
    
