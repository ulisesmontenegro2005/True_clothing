const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('carritoDeCompras');
const cerrarCarrito = document.getElementById('botonCerrar');
const modalCarrito = document.querySelector('.modalCarrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
});

cerrarCarrito.addEventListener('click', () =>{
    modalContenedor.classList.toggle('modal-active');
});

modalContenedor.addEventListener('click', () =>{
    cerrarCarrito.click();
});

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation(); 
});