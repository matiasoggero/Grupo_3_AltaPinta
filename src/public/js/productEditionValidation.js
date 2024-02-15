window.addEventListener("load", function () {

    let formulario = document.querySelector("#formProductEdition")

    formulario.addEventListener("submit", function (e) {


        let errores = [];

        let name = document.querySelector("#name")

        if (name.value.length < 3) {
            errores.push("el campo de nombre debe tener al menos 3 caracteres")
        }


        let description = document.querySelector("#description")

        if (description.value.length < 5) {
            errores.push("la descripción debe tener al menos 10 caracteres")
        }

        let image = document.querySelector("#image");

        if (image.naturalWidth === 0) {
            errores.push("Debe cargar la imagen del producto");
        }


        let price = document.querySelector("#numPrice")

        if (price.value === "" || isNaN(price.value)) {
            errores.push("Por favor, ingresa un valor numérico válido para el precio.");
        }

        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector("div.error ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    });
});
