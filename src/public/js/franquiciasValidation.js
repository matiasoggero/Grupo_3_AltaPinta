window.addEventListener("load", function () {
    const form = document.getElementById('formFranquicias');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const errorContainer = document.getElementById('errorContainer');
        errorContainer.innerHTML = '';

        let error = false;

       
        const nombre = document.getElementById('nombre').value.trim();
        if (!nombre) {
            addError("Por favor, ingresa tu nombre.");
            error = true;
        }

        
        const apellido = document.getElementById('apellido').value.trim();
        if (!apellido) {
            addError("Por favor, ingresa tu apellido.");
            error = true;
        }

        
        const email = document.getElementById('email').value.trim();
        if (!email) {
            addError("Por favor, ingresa tu correo electrónico.");
            error = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            addError("Por favor, ingresa un correo electrónico válido.");
            error = true;
        }

        
        const telefono = document.getElementById('telefono').value.trim();
        if (!telefono) {
            addError("Por favor, ingresa tu número de teléfono.");
            error = true;
        } else if (!/^([0-9()+\-.\s]{7,20})$/.test(telefono)) {
            addError("El número de teléfono no es válido.");
            error = true;
        }

        
        const comoConocieron = document.getElementById('como_conocieron').value.trim();
        if (!comoConocieron) {
            addError("Por favor, selecciona cómo nos conocieron.");
            error = true;
        }

        
        const zonaInteres = document.getElementById('zona_interes').value.trim();
        if (!zonaInteres) {
            addError("Por favor, ingresa la zona de interés.");
            error = true;
        }

        
        const ocupacion = document.getElementById('ocupacion').value.trim();
        if (!ocupacion) {
            addError("Por favor, ingresa tu ocupación.");
            error = true;
        }

        
        const mensaje = document.getElementById('mensaje').value.trim();
        if (!mensaje) {
            addError("Por favor, ingresa un mensaje.");
            error = true;
        }

        if (error) { 
            return;
        }

        this.submit();

        function addError(errorMessage) { 
            const errorElement = document.createElement('li');
            errorElement.textContent = errorMessage;
            errorContainer.appendChild(errorElement);
        }
    });
});