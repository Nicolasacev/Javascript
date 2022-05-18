

# Consultoría Digital Nicolas Acevedo

Proyecto de ecommerce

----------

## Estructura del proyecto

Es una tienda con 3 páginas: home, producto y carrito. Las últimas 2 cuentan con las funcionalidades de JavaScript, En la barra de navegación tengo un contador que nos cuenta la cantidad de productos únicos (o sea un mismo producto seleccionado 2 veces se contabiliza como 1 por ser el mismo producto).
## Pagina de productos: 
Las tarjetas se renderizan haciendo uso de plantillas literal.
El botón de “agregar al carrito” desaparece si no hay stock.
El botón “detalle” nos trae propiedades del objeto en un modal.
Al presionar el botón  "agregar al carrito", se guarda el producto en un array nuevo se dispara una notificación con Tostify y se guarda en LocalStorage.
Esta función identifica si el elemento ya se encuentra en el array, si es así, solo aumenta su cantidad.
Si cerramos la pagina, el carrito se mantiene en el LocalStorage.

## Pagina Carrito:
 Las tarjetas se renderizan de acuerdo a los productos agregados en la pagina de productos.
 Podemos incrementar o disminuir en 1 la cantidad de un mismo producto o eliminar por completo la tarjeta con el botón “x”.
 El total refleja el valor total de los productos multiplicados por su respectiva cantidad.
 Con el botón “comprar” accedemos a un formulario en el que debemos ingresar nuestro nombre, al presionar en “finalizar compra”, se disparará otro modal que trae un mensaje con el nombre que ingresamos previamente.




