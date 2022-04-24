//LOCAL STORAGE : almacenamiento de contador de carrito
const carritoStorage = (contador) => {
    const carritoStorage1 = JSON.stringify(contador)
    localStorage.setItem("enCarrito", carritoStorage1);
}

//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}

