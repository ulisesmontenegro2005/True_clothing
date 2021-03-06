import { productos } from "./stock.js";
import { actualizarCarrito } from "./actualizarCarrito.js";
let carritoDeCompras = [];

const contenedorCarrito = document.getElementById('carritoContenedor');

export const carritoIndex = (productoId) => {
    actualizarCarrito(carritoDeCompras);

    let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);
    contarProductosRepetidos(productoRepetido, productoId);
    eliminarProductosCarrito(productoId);
}

export const eliminarProductosCarrito = (productoId) =>{
  let botonEliminar = document.getElementById(`botonEliminar${productoId}`);
  
  botonEliminar.addEventListener('click', () => {
      botonEliminar.parentElement.remove();
      carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
      actualizarCarrito(carritoDeCompras);
  });
}

const contarProductosRepetidos = (prodRepetido, productoId) => {
  if (prodRepetido) {
    prodRepetido.cantidad++
    document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
    actualizarCarrito(carritoDeCompras);
  } else {
    renderProductosCarrito(productoId);
  }
}

const renderProductosCarrito = (productoId) => {
  // buscar id (find) y pushearlo al array con cantidad 1
  let producto = productos.find(producto => producto.id == productoId);
  carritoDeCompras.push(producto);
  producto.cantidad = 1;

  // alerta añadido al carrito
  Toastify({
    text: "Producto añadido correctamente.",
    className: "info",
    duration: 1500, 
    gravity: "bottom",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();

  // contenedores para los productos en el carrito
  let div = document.createElement('div');
  div.classList.add('productoCarrito');
  div.innerHTML = `<p>${producto.nombre}</p>
                  <p>Precio: ${producto.precio}</p>
                  <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                  <button id="botonEliminar${producto.id}" class="botonEliminar material-icons md-36">delete</button>

  `;

  // contenedor los apropia como hijos
  contenedorCarrito.appendChild(div);
  actualizarCarrito(carritoDeCompras);
}

