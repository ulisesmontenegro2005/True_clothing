
const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('carritoDeCompras');
const cerrarCarrito = document.getElementById('botonCerrar');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
});

cerrarCarrito.addEventListener('click', () =>{
    modalContenedor.classList.toggle('modal-active');
});

