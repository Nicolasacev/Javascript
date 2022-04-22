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
 const repuestos = []

repuestos.push (new Producto("fl/45", "Block", "Motor", "Ford", 2, "cn15/8200/ba", 70000, "../assets/img/motorBlock.jpg", "detalle block" ))
repuestos.push (new Producto("fl/46", "Optica", "Electricidad", "Fiat", 0, "8n15/13005/ba", 20000,"../assets/img/optica.jpg" , "detalle optica"))
repuestos.push (new Producto("fl/47", "Diferencial", "Transmision", "Peugeot", 2, "ab39/8230/ca", 35000,"../assets/img/diferencial.jpg", "detalle diferencial"))
repuestos.push (new Producto("fl/48", "Puerta", "Chapa", "Chevrolet", 2, "an15/n16016/ba", 40000,"../assets/img/puerta.png", "detalle puerta"))

const $tarjetero = document.querySelector("#tarjetero"),
    $template = document.getElementById("cardTemplate").content,
    $fragment = document.createDocumentFragment()

//CICLO QUE CREA LAS TARJETAS
repuestos.forEach((element)=>{
    const {stock, nombre, imagen, modelo, precio} = element //--> USO DE DESESTRUCTURACION
    $template.querySelector(".name").textContent = nombre
    $template.querySelector("img").setAttribute("src", imagen)
    $template.querySelector(".modelo").textContent = modelo
    $template.querySelector(".precio").textContent = precio

    let $clone = document.importNode($template, true)
    $fragment.appendChild($clone);


///SI NO HAY STOCK NO DEJA VER EL BOTON DE AGREGAR AL CARRITO
    (stock == 0)   ? $fragment.getElementById("agregarCarrito").classList.add("btnDisplay")
                      : $fragment.getElementById("sinStock").classList.add("btnDisplay")

//AGREGAMOS EL FRAGMENTO AL TARJETERO
$tarjetero.appendChild($fragment)
})


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

