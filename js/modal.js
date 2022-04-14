
const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('carritoDeCompras');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
});

