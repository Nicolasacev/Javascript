window.onload = () =>{
    
const contadorCarrito = document.querySelector(".contadorCarrito")
const botonCarrito = document.querySelectorAll("#agregarCarrito")
const botonVaciar = document.querySelector(".vaciar")
const avisoCarrito = document.querySelector(".avisoCarrito")
const carrito = [] //JSON.parse(localStorage.getItem('enCarrito')) || [] //USO DE OPERADOR OR
let contador = 0


// CONTADOR EN BOTON DE CARRITO
botonCarrito.forEach(element => {
    element.addEventListener("click", () => { 
        contador++
        contadorCarrito.innerHTML = `${contador}`
        carritoStorage(contador);
           
        Toastify({
            text: "Producto agregado al carrito!",
            duration: 1500,
            position: 'right',
            style: {
                background: 'linear-gradient(to right, #F7B206, #281E04)'
            }
        }).showToast();
    });
});

//FUNCION PARA DIFERENCIAR OBJETOS AGREGADOS AL CARRITO

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

//CICLO QUE CREA LAS FILAS DE LA TABLA 
carrito.forEach((element)=>{
    const {stock, nombre, imagen, modelo, precio} = element //--> USO DE DESESTRUCTURACION
    templateCarrito.querySelector(".nombreProductoCarrito").textContent = nombre
    templateCarrito.querySelector("#imgCarrito").setAttribute("src", imagen)
    templateCarrito.querySelector(".table__price").textContent = precio

    let clone = document.importNode(templateCarrito, true)
    tableRow.appendChild(clone);

    tablaCarrito.appendChild(tableRow)
})

//FUNCION BOTON PARA VACIAR EL CARRITO
botonVaciar.onclick = ()=> {
    contadorCarrito.innerText = `0`
    const vaciarStorage = "0"
    localStorage.setItem("enCarrito", vaciarStorage);
}

//OPERADOR AND
carrito != 0 && avisoCarrito.classList.add("btnDisplay")
}