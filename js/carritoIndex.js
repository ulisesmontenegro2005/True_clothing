let carritoDeCompras = [];

const carritoIndex = (productoId) => {

    const contenedorCarrito = document.getElementById('carritoContenedor');

    let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);

    const eliminarProductosCarrito = (productoId) =>{
        let botonEliminar = document.getElementById(`botonEliminar${productoId}`);
        
        botonEliminar.addEventListener('click', () => {
            botonEliminar.parentElement.remove();
            carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
            actualizarCarrito(carritoDeCompras);
        });
    }

    const contarProductosRepetidos = (prodRepetido) => {
        console.log(prodRepetido)
        if (prodRepetido) {
          prodRepetido.cantidad++
          document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = 
          `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
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

    contarProductosRepetidos(productoRepetido);
    eliminarProductosCarrito(productoId);
}
