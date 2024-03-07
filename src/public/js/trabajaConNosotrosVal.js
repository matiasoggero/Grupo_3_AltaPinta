window.addEventListener("load", function () {
    const form = document.getElementById('formTrabaja');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const errorContainer = document.getElementById('errorContainer');
        errorContainer.innerHTML = '';

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const dni = document.getElementById('dni').value.trim();
        const fechaNacimiento = document.getElementById('fecha_nacimiento').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const nivelEstudio = document.getElementById('nivel_estudio').value.trim();
        const domicilio = document.getElementById('domicilio').value.trim();
        const provincia = document.getElementById('provincia').value.trim();
        const ciudad = document.getElementById('ciudad').value.trim();
        const disponibilidad = document.getElementById('disponibilidad').value.trim();
        const cv = document.getElementById('cv').value.trim();

        let error = false;

        if (!nombre) {
            addError("Por favor, ingresa tu nombre.");
            error = true;
        }

        if (!apellido) {
            addError("Por favor, ingresa tu apellido.");
            error = true;
        }

        if (!dni) {
            addError("Por favor, ingresa tu número de DNI.");
            error = true;
        } else if (!/^([0-9]{7,8})$/.test(dni)) {
            addError("El número de DNI debe contener solo números y tener entre 7 y 8 dígitos.");
            error = true;
        }

        if (!fechaNacimiento) {
            addError("Por favor, ingresa tu fecha de nacimiento.");
            error = true;
        }

        if (!email) {
            addError("Por favor, ingresa tu correo electrónico.");
            error = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            addError("Por favor, ingresa un correo electrónico válido.");
            error = true;
        }

        if (!telefono) {
            addError("Por favor, ingresa tu número de teléfono.");
            error = true;
        } else if (!/^([0-9()+\-.\s]{7,20})$/.test(telefono)) {
            addError("El número de teléfono no es válido.");
            error = true;
        }

        if (!nivelEstudio) {
            addError("Por favor, selecciona tu nivel de estudio.");
            error = true;
        }

        if (!domicilio) {
            addError("Por favor, ingresa tu domicilio.");
            error = true;
        }

        if (!provincia) {
            addError("Por favor, ingresa tu provincia o distrito.");
            error = true;
        }

        if (!ciudad) {
            addError("Por favor, ingresa tu ciudad o localidad.");
            error = true;
        }

        if (!disponibilidad) {
            addError("Por favor, selecciona tu disponibilidad horaria.");
            error = true;
        }

        if (!cv) {
            addError("Por favor, adjunta tu curriculum vitae.");
            error = true;
        } else if (!/\.(pdf)$/i.test(cv)) {
            addError("El formato del curriculum vitae debe ser PDF.");
            error = true;
        }

        if (error) {
            return;
        }

        // Si no hay errores, envía el formulario
        this.submit();

        function addError(errorMessage) {
            const errorElement = document.createElement('li');
            errorElement.textContent = errorMessage;
            errorContainer.appendChild(errorElement);
        }
    });
});