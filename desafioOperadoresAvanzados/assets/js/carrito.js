
const contadorCarrito = document.querySelector(".contadorCarrito")
const botonCarrito = document.querySelectorAll("#agregarCarrito")
const botonVaciar = document.querySelector(".vaciar")
const avisoCarrito = document.querySelector(".avisoCarrito")
const carrito = [] //JSON.parse(localStorage.getItem('enCarrito')) || [] //USO DE OPERADOR OR
let contador = 0


// contador en boton de carrito
botonCarrito.forEach(element => {
    element.addEventListener("click", () => { 
        contador++
        contadorCarrito.innerHTML = `${contador}`
        carritoStorage(contador);
    });
});

//funcion para diferenciar objetos agregados al carrito

botonCarrito.forEach(btn => {
    btn.addEventListener (`click`, addToCarritoItem)
})

function addToCarritoItem(e) {
    const button = e.target
    const item = button.closest(`.card`)
    const nombreItem = item.querySelector(".name").textContent;
    const precioItem = item.querySelector(".precio").textContent;
    const itemImg = item.querySelector (`.picture`).src;

    const itemAdded = {
        nombre: nombreItem,
        precio:precioItem,
        img:itemImg
    }
    carrito.push(itemAdded)
   
}

const tablaCarrito = document.querySelector("#tablaCarrito"),
templateCarrito = document.getElementById("templateCarrito").content,
tableRow = document.createDocumentFragment()

//ciclo que crea las filas de la tabla 
carrito.forEach((element)=>{
    const {stock, nombre, imagen, modelo, precio} = element //--> USO DE DESESTRUCTURACION
    templateCarrito.querySelector(".nombreProductoCarrito").textContent = nombre
    templateCarrito.querySelector("#imgCarrito").setAttribute("src", imagen)
    templateCarrito.querySelector(".table__price").textContent = precio

    let clone = document.importNode(templateCarrito, true)
    tableRow.appendChild(clone);

    tablaCarrito.appendChild(tableRow)
})

/*
//funcion boton para vaciar el carrito
botonVaciar.onclick = ()=> {
    contadorCarrito.innerText = `0`
    const vaciarStorage = "0"
    localStorage.setItem("enCarrito", vaciarStorage);
}
*/

//OPERADOR AND
carrito != 0 && avisoCarrito.classList.add("btnDisplay")