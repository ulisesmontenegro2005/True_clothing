const precioTotal = document.getElementById('precioTotal');

const actualizarCarrito = (carritoDeCompras) => {
  precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

  localStorage.setItem("productos", JSON.stringify(carritoDeCompras));
}

export { actualizarCarrito }
