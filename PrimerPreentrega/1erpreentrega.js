

class Producto{
    constructor(id, nombre, familia, modelo, stock, codigo, precio,) {
        this.id = id;
        this.nombre = nombre;
        this.familia = familia;
        this.modelo = modelo;
        this.stock = stock;
        this.codigo = codigo;
        this.precio = precio;
    }

}

const producto1 = new Producto("fl/45", "Block", "Motor", "Ford", 2, "cn15/8200/ba", 70000);
const producto2 = new Producto("fl/46", "Optica", "Electricidad", "Fiat", 2, "8n15/13005/ba", 20000);
const producto3 = new Producto("fl/47", "Diferencial", "Transmision", "Peugeot", 2, "ab39/8230/ca", 35000);
const producto4 = new Producto("fl/48", "Puerta", "Chapa", "Chevrolet", 2, "an15/n16016/ba", 40000);


const repuestos = [] 

repuestos.push (producto1, producto2, producto3, producto4)

console.log(repuestos);


//-------------------------------------------------------------------------------


const sumarIva = (prod) => prod.precio * 1.21 


//--------------------------------------------------------------------------------


let preg1=prompt("¿Estas buscando repuestos para tu vehiculo? \n responde si o no").toLowerCase();
let preg2

const listarProductos = () => {repuestos.forEach(element => {
    document.write(`${element.nombre} <br>`)
}) }


if(preg1=="si"){
 
    preg2="¿Que tipo de repuesto buscas?\n\n";
    preg2+="1.Motor\n";
    preg2+="2.Electricidad\n";
    preg2+="3.Transmision\n";
    preg2+="4.Carroceria\n";
    preg2+="5.Lista de repuestos\n\n";
    preg2+="Ingrese el codigo\n";

    codigo=parseInt(prompt(preg2));

        switch(codigo){ 
            case 1: 
                document.write(JSON.stringify(producto1));//no quise usar un console.log para que lo vea el usuario
                alert(`Pieza disponible: ${producto1.nombre}`)
                alert(`El precio final del Block con iva incluido es de ${sumarIva(producto1)}`);

                break;

            case 2: 
                document.write(JSON.stringify(producto2));
                alert(`Pieza disponible: ${producto2.nombre}`)

                alert(`El precio final de las opticas con iva incluido es de ${sumarIva(producto2)}`);
                break;

            case 3: 
                document.write(JSON.stringify(producto3));
                alert(`Pieza disponible: ${producto3.nombre}`)

                alert(`El precio final del Diferencial con iva incluido es de ${sumarIva(producto3)}`);
                break;

            case 4: 
                document.write(JSON.stringify(producto4));
                alert(`Pieza disponible: ${producto4.nombre}`)
                alert(`El precio final de la Puerta con iva incluido es de ${sumarIva(producto4)}`);
                break;

            case 5: 
                listarProductos()                
                break;
        }
}
else if(preg1=="no"){
    alert("¡Estamos trabajando para traerle nuevos accesorios!");
    }else{
        alert("Escriba si o no")
    } 

   


