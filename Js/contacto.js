document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;
    console.log("Datos capturados:", { nombre, email, asunto, mensaje });
    alert("¡Hola " + nombre + "! Tu mensaje sobre '" + asunto + "' ha sido enviado con éxito. Te responderemos pronto.");
    this.reset();
});