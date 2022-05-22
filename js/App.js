import { carritoIndex } from "./carritoIndex.js";
import { getData } from "./getData.js";

const mostrarProductos = async () => {

    const contenedorProductos = document.getElementById("mainIndex");
    const productos = await getData();

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `
                        <div class="card-image">
                            <img class="img-fluid" src=${producto.img}>
                            <a id=boton${producto.id}></a>
                        </div>
                        <div class="card-content">
                            <button class="botonProductos" id=botonAgregarCarrito${producto.id}>Agregar al carrito</button>
                        </div>
                        <div class="cardAbajo">
                            <p> ${producto.desc} </p>
                            <p> ${producto.precio}$ </p>
                        </div>

                         `
        contenedorProductos.appendChild(div);
        
        const carrito = document.getElementById(`botonAgregarCarrito${producto.id}`);

        carrito.addEventListener('click', () => {
            carritoIndex(producto.id);
        });
    });
};

export { mostrarProductos }

