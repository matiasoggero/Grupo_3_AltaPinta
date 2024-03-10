document.addEventListener("DOMContentLoaded", function() {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');

  
    const form = document.getElementById('formContact');
    const errorContainer = document.getElementById('error-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        let error = false;
        errorContainer.innerHTML = '';

        if (!nombre) {
            addError("Por favor, ingresa tu nombre.");
            error = true;
        } else if (nombre.length < 2) {
            addError("El nombre debe tener al menos 2 caracteres.");
            error = true;
        }

        if (!email) {
            addError("Por favor, ingresa tu correo electrónico.");
            error = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            addError("Por favor, ingresa un correo electrónico válido.");
            error = true;
        }

        if (!mensaje) {
            addError("Por favor, ingresa tu mensaje.");
            error = true;
        } else if (mensaje.length < 20) {
            addError("El mensaje debe tener al menos 20 caracteres.");
            error = true;
        }

        if (!error) {
            
            form.submit();
        }

        function addError(errorMessage) {
            const errorElement = document.createElement('li');
            errorElement.textContent = errorMessage;
            errorContainer.appendChild(errorElement);
        }
    });
});