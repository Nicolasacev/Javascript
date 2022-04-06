//DESAFIO CLASE 8 - Interectuar con HTML


/*------------------------------------------------------------------------ */


//AGREGO UNA TARJETA NUEVA POR CADA OBJETO CREADO



class Producto{
    constructor(id, nombre, familia, modelo, stock, codigo, precio,imagen) {
        this.id = id;
        this.nombre = nombre;
        this.familia = familia;
        this.modelo = modelo;
        this.stock = stock;
        this.codigo = codigo;
        this.precio = precio;
        this.imagen = imagen;
    }

}

const producto1 = new Producto("fl/45", "Block", "Motor", "Ford", 2, "cn15/8200/ba", 70000, "picture1");
const producto2 = new Producto("fl/46", "Optica", "Electricidad", "Fiat", 2, "8n15/13005/ba", 20000,"picture2");
const producto3 = new Producto("fl/47", "Diferencial", "Transmision", "Peugeot", 2, "ab39/8230/ca", 35000,"picture3");
const producto4 = new Producto("fl/48", "Puerta", "Chapa", "Chevrolet", 2, "an15/n16016/ba", 40000,"picture4");


const repuestos = [] 

repuestos.push (producto1, producto2, producto3, producto4)




const tarjetero = document.querySelector("#tarjetero"); 


repuestos.forEach( (repuesto) =>{

    let nuevoRepuesto = document.createElement("div");
    
    let contenidoCard = `<div class="picture ${repuesto.imagen}">
                            </div>  
                            <div class="name">
                            <p>${repuesto.nombre}</p>
                            </div>
                            <div class="jobtitle">
                                <p>${repuesto.familia}</p>
                            </div>
                            <div class="buttons">
                                <div class="button1">
                                    <button class="botonCompra">Comprar</button>
                                </div>
                                <div class="button2">
                                    <button>Detalles</button>
                                </div>
                            </div>`

    nuevoRepuesto.className = "card";
    nuevoRepuesto.innerHTML = contenidoCard

    tarjetero.append(nuevoRepuesto);
})




