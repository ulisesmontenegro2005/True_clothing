const precioTotal = document.getElementById('precioTotal');

const actualizarCarrito = (carritoDeCompras) => {
//   console.log(carritoDeCompras)
  precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);

  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}
