const precioTotal = document.getElementById('precioTotal');

export const actualizarCarrito = (carritoDeCompras) => {
  precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

  localStorage.setItem("productos", JSON.stringify(carritoDeCompras));
}
