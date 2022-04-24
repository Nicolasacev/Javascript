//DESAFIO CLASE 9 - eventos

//AGREGO UNA TARJETA NUEVA POR CADA OBJETO CREADO

class Producto{
    constructor(id, nombre, familia, modelo, stock, codigo, precio,imagen, detalle) {
        this.id = id;
        this.nombre = nombre;
        this.familia = familia;
        this.modelo = modelo;
        this.stock = stock;
        this.codigo = codigo;
        this.precio = precio;
        this.imagen = imagen;
        this.detalle = detalle;
    }

}

const producto1 = new Producto("fl/45", "Block", "Motor", "Ford", 2, "cn15/8200/ba", 70000, "picture1", "detalle block" );
const producto2 = new Producto("fl/46", "Optica", "Electricidad", "Fiat", 2, "8n15/13005/ba", 20000,"picture2" , "detalle optica");
const producto3 = new Producto("fl/47", "Diferencial", "Transmision", "Peugeot", 2, "ab39/8230/ca", 35000,"picture3", "detalle diferencial");
const producto4 = new Producto("fl/48", "Puerta", "Chapa", "Chevrolet", 2, "an15/n16016/ba", 40000,"picture4", "detalle puerta");

const repuestos = []

repuestos.push (producto1, producto2, producto3, producto4)

const tarjetero = document.querySelector("#tarjetero");

repuestos.forEach( (repuesto) =>{

    let nuevoRepuesto = document.createElement("div");

    let contenidoCard = `<div class="picture ${repuesto.imagen}">
                            </div>
                            <div>
                            <p  class="name">${repuesto.nombre}</p>
                            </div>
                            <div>
                                <p class="jobtitle modelo">${repuesto.familia}</p>
                            </div>
                            <div>
                                <p class="precio">${repuesto.precio}</p>
                            </div>
                            <div class="buttons">
                                <button class="button1 botonCompra" id="agregarCarrito">Agregar al carrito</button>
                                <button type="button" class="button2" id="botonDetalle"  data-toggle="modal" data-target="#myModal">Detalles</button>
                            </div>`

    nuevoRepuesto.className = "card";
    nuevoRepuesto.innerHTML = contenidoCard

    tarjetero.append(nuevoRepuesto);



})


//EVENTOS EN LOS BOTONES DEL CARRITO

const contadorCarrito = document.querySelector(".contadorCarrito")
const botonCarrito = document.querySelectorAll("#agregarCarrito")

botonCarrito.forEach((btn) => {
        btn.addEventListener("click", addToCart);
      });

let contador = 0

function addToCart() {
    contador++
    contadorCarrito.innerHTML = `${contador}`


//storage y Json

const enCarritoJson = JSON.stringify(contador);

localStorage.setItem("enCarrito", enCarritoJson);


//const almacenado = JSON.parse(localStorage.getItem(enCarritoJson));

//contador = almacenado

}

//CALCULADORA DE IVA

const sumarIva = document.querySelectorAll("#sumarIva")

sumarIva.forEach((btn) => {
        btn.addEventListener("click", calcularIva);
      });



function calcularIva(e) {
    const button = e.target;
    const item = button.closest(".modal-body");
    const precio = item.querySelector("#precioRepuesto").textContent;

    let precioConIva = precio*1.21

    const renderIva = document.querySelector("#conIvaRepuesto")
    renderIva.innerHTML = `El precio mas iva es ${precioConIva}`

}


//AL BOTON DETALLE LE AÑADIMOS EL EVENTO VER DETALLE---

const boton = document.querySelectorAll("#botonDetalle")

    boton.forEach((btn) => {
        btn.addEventListener("click", verDetalle);
      });


      //FUNCION PARA VER EL DETALLE DE CADA PRODUCTO---
function verDetalle (e){
    const button = e.target;
    const item = button.closest(".card");

    const nombreItem = item.querySelector(".name").textContent;
    const modeloItem = item.querySelector(".modelo").textContent;
    const precioItem = item.querySelector(".precio").textContent;

    const nombreProd = document.querySelector("#nombreRepuesto")
    const modeloProd = document.querySelector("#modeloRepuesto")
    const precioProd = document.querySelector("#precioRepuesto")


     nombreProd.innerHTML = nombreItem
     modeloProd.innerHTML = modeloItem
     precioProd.innerHTML = precioItem


}