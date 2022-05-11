import { mostrarProductos } from "./App.js";
import { actualizarCarrito } from "./actualizarCarrito.js";
import { eliminarProductosCarrito } from "./carritoIndex.js";

const contenedorCarrito = document.getElementById('carritoContenedor');
let carritoStorage = [];

document.addEventListener("DOMContentLoaded", () => {

  mostrarProductos();

  if (localStorage.getItem("productos")) {
    carritoStorage = JSON.parse(localStorage.getItem("productos"))
    carritoStorage.map((producto) => {
      let div = document.createElement('div');
      div.classList.add('productoCarrito');
      div.innerHTML = `<p>${producto.nombre}</p>
      <p>Precio: ${producto.precio}</p>
      <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
      <button id="botonEliminar${producto.id}" class="botonEliminar material-icons md-36">delete</button>
      `;
      contenedorCarrito.appendChild(div);

      actualizarCarrito(carritoStorage);
      eliminarProductoCarrito(producto.id);
    })
  }
})