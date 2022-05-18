import { guardarEnLS, traerLS} from "./storage.js"
//CARRITO

let carrito = traerLS() || [] 
 try {
    verificarContador()
    renderCarrito()
 } catch (error) {
  console.log('');
 }
 
//RENDER CARRITO
function renderCarrito() {
  const tbody = document.querySelector('.tbody')
   tbody.innerHTML = ""
     Object.values(carrito).forEach(item => { //USO DE METODO DE ORDEN SUPERIOR
      const tr = document.createElement('tr')
      tr.classList.add('ItemCarrito')
      const Content = `
              <th scope="row">1</th>
              <td class="table__productos">
                <img src=${item.img}  alt="">
                <h6 class="title name">${item.nombre}</h6> 
              </td>
              <td class="table__price"><p>${item.precio}</p></td>
              <td class="table__cantidad">
            <div class ="botoneraCarrito">
              <button class="incremento btn btn-success" >+</button>
              <span class="cantidad">${item.cantidad}</span>
              <button class="decremento btn btn-danger">-</button>
              <button class="delete btn btn-secondary">x</button>
            </div>
              </td> ` 
      tr.innerHTML = Content;
      tbody.append(tr)
    });  
      CarritoTotal()

      //MENSAJE DE GRACIAS POR SU COMPRA
const terminarCompra = document.querySelector(".terminarCompra")
terminarCompra.addEventListener("click", finalizarCompra);

function finalizarCompra() {// ESTA FUNCION USA LA ENTRADA DE DATOS AL FINALIZAR LA COMPRA
  const nombreUsuario = document.getElementById("nombreUsuario").value
  const saludoUsuario = document.getElementById("saludoUsuario")
  saludoUsuario.innerHTML = nombreUsuario  
  $('#exampleModal').modal('toggle')
} 
}

const btnEliminar = document.querySelectorAll(".delete")
        btnEliminar.forEach(btn => {
          btn.addEventListener("click", eliminarDelCarrito);
        });

const incremento = document.querySelectorAll(".incremento")
        incremento.forEach(btn => {
           btn.addEventListener("click", sumarCantidad);
         });
    
const decremento = document.querySelectorAll(".decremento")
        decremento.forEach(btn => {
          btn.addEventListener("click", restarCantidad);
        })

//CONTADOR CARRITO
function verificarContador() {
  const contadorCarrito = document.querySelector(".contadorCarrito")
  let cantidad = carrito.length
  contadorCarrito.innerHTML= `${cantidad}`
}

//FUNCION PARA AGREGAR PRODUCTOS AL ARRAY
function agregarAlCarrito(e) {
  const button = e.target
  const item = button.closest(`.card`)
  const nombre = item.querySelector(".name").textContent;
  const precio = item.querySelector(".precio").textContent;
  const img = item.querySelector (`.picture`).src;

  const itemToAdd ={ nombre, precio, img, cantidad: 1}
  const findElement = carrito.findIndex(e => e.nombre == itemToAdd.nombre)

  //SI EL ELEMENTO NO EXISTE LO PUSHEA AL CARRITO 
  findElement === -1 ? carrito.push(itemToAdd) :  carrito[findElement].cantidad++ //USO DE OPERADOR TERNARIO

  Toastify({ //USO DE LIBRERIA
    text: "Producto agregado al carrito!",
    duration: 1500,
    position: 'right',
    style: {
        background: 'linear-gradient(to right, #F7B206, #281E04)'
    }}).showToast();
  guardarEnLS()
  verificarContador()
} 

 //BOTONERA CARRITO RESTAR
 function restarCantidad(e) {
  const btnRestar  = e.target
  const tr = btnRestar.closest(".ItemCarrito")
  const nombre = tr.querySelector('.title').textContent;
  const findElement = carrito.findIndex(e => e.nombre == nombre)

if (  carrito[findElement].cantidad > 1 ) {
  carrito[findElement].cantidad --
}
  guardarEnLS()
  CarritoTotal()
  location.reload()
}

 //BOTONERA CARRITO DELETE
function eliminarDelCarrito(e) {
  const button = e.target
  const item = button.closest(".ItemCarrito")
  const nombre = item.querySelector(".name").textContent;
  const findElement = carrito.findIndex(e => e.nombre == nombre)
  carrito.splice(findElement, 1)
  guardarEnLS()
  location.reload()
}
 
//FUNCION TOTAL EN CARRITO
function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  guardarEnLS()
}

//BOTONERA CARRITO SUMAR
function sumarCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const nombre = tr.querySelector('.title').textContent;
  const findElement = carrito.findIndex(e => e.nombre == nombre) //USO DE METODO DE ORDEN SUPERIOR
  carrito[findElement].cantidad ++
  guardarEnLS()
  CarritoTotal()
  location.reload()
}
export {carrito,agregarAlCarrito}
    


