
const $tarjetero = document.querySelector("#tarjetero"),
$template = document.getElementById("cardTemplate").content,
$fragment = document.createDocumentFragment()

fetch('/desafioFetch/productos.json') // USO DE FETCH
 .then (r => r.json())
 .then (data =>{
 
//CICLO QUE CREA LAS TARJETAS
data.forEach((element)=>{
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
})


