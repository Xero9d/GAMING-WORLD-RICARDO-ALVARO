// Formulario

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene que la web no se reinicie al enviar el formulario

    // Obtener los valores del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validar que todos los campos están llenos
    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Console.log para verificar los datos enviados.
    console.log("Formulario Enviado Correctamente");
    console.log("Nombre:", name);
    console.log("Correo Electrónico:", email);
    console.log("Mensaje:", message);

    // Limpiar el texto introducido por el usuario
    document.getElementById("contactForm").reset();

    // Creamos mensaje con los datos introducidos por el usuario
    let thankYouMessage = "Muchas gracias por rellenar el formulario " + name + ". Nos pondremos en contacto contigo próximamente en: " + email;

    // Mostrar el mensaje en un pop-up
    alert(thankYouMessage);
});