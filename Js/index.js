var carrito = [];
var total = 0;
 
function agregarCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    total = total + precio;
 
    var lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";
 
    for (var i = 0; i < carrito.length; i++) {
        var item = document.createElement("li");
        item.textContent = carrito[i].nombre + " - $" + carrito[i].precio.toFixed(2);
        lista.appendChild(item);
    }

    document.getElementById("total").textContent = total.toFixed(2);
    alert(nombre + " ha sido agregado con éxito.");
}
 
function vaciarCarrito() {
    carrito = [];
    total = 0;
 
    var lista = document.getElementById("listaCarrito");
    lista.innerHTML = "<li>No hay productos aún</li>";
 
    document.getElementById("total").textContent = "0.00";
}

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}
 
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
 
function enviarFormulario() {
    var nombre  = document.getElementById("inputNombre").value;
    var email   = document.getElementById("inputEmail").value;
    var mensaje = document.getElementById("inputMensaje").value;
 
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }
 
    alert("¡Gracias " + nombre + "! Hemos recibido tu mensaje. Te responderemos a " + email);
    
    document.getElementById("inputNombre").value  = "";
    document.getElementById("inputEmail").value   = "";
    document.getElementById("inputMensaje").value = "";
    cerrarModal();
}