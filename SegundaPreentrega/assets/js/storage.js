//LOCAL STORAGE : almacenamiento de contador de carrito

const carritoStorage = (contador) => {
    const carritoStorage1 = JSON.stringify(contador)
    localStorage.setItem("enCarrito", carritoStorage1);
}

