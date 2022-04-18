let carritoDeCompras = [];

const carritoIndex = (productoId) => {

    const contenedorCarrito = document.getElementById('carritoContenedor')

    const renderProductosCarrito = () => {
        let producto = productos.find(producto => producto.id == productoId);
        carritoDeCompras.push(producto);

        producto.cantidad = 1;

        let div = document.createElement('div');
        div.classList.add('productoCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                         <p>Precio: ${producto.precio}</p>
                         <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                         <button id="eliminar${producto.id}" class="material-icons md-36">delete</button>

        `;
        contenedorCarrito.appendChild(div);
    }

    renderProductosCarrito();
}
