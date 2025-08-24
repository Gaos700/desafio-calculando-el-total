const precio = 400000
let cantidad = 0

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

precioSpan.textContent = precio;
totalSpan.textContent = 0;

function sumar() {
    cantidad++;
    cantidadSpan.textContent = cantidad;
    totalSpan.textContent = cantidad*precio;
}
function restar(){
    cantidad--;
    cantidadSpan.textContent = cantidad;
    totalSpan.textContent = cantidad*precio;
}
