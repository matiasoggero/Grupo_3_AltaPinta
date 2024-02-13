window.addEventListener("load",() => {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const imageInput = document.querySelector("#avatar");

    const nameErrors = document.querySelector("#nameErrors");
    const emailErrors = document.querySelector("#emailErrors");
    const imageErrors = document.querySelector("#imageErrors");

    nameInput.addEventListener("focus",() => {
        nameErrors.innerHTML ="";
    });

    nameInput.addEventListener("blur", (event) => {
        const currentInputLength = event.target.value.length;
        const errors = [];

        console.log(currentInputLength)

        if (currentInputLength <= 2){
            errors.push("Debes completar correctamente este campo")
        }
        
        errors.forEach((error) => {
            nameErrors.innerHTML += `${error}/n`;
        });
    });

    emailInput.addEventListener("focus",() => {
        email.innerHTML ="";
    });

    emailInput.addEventListener("blur",(event)=>{
     const containsAtSymbol = event.target.value.includes("@");
     const errors = [];
        
        if(!containsAtSymbol){
            errors.push("Debes ingresar un email válido")
        }

        errors.forEach((error) => {
            emailErrors.innerHTML += `${error}/n`;
        })
    });

   imageInput.addEventListener("change",(event)=>{
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const imageName = event.target.value;
    const imageNameParts = imageName.split('.');
    const fileExtension = imageNameParts.slice(-1)[0].toLowerCase();
    const isAllowed = allowedExtensions.indexOf(fileExtension) >= 0;
    const errors = [];

        if(!isAllowed){
            errors.push("Debes adjuntar un archivo válido (jpg, jpeg, png)")
         }
        if(errors.length === 0){
            imageErrors.innerHTML = ""
        }else{
            errors.forEach((error) => {
                imageErrors.innerHTML += `${error}<br>`;
            });
        }
    })
    password.addEventListener("change",(event)=>{
        passwordErrors.innerHTML = "";
        const password = event.target.value;
        const passwordlength = password.length;
        const upperLetterRegex = /[A-Z]/;
        const lowerLetterRegex = /[a-z]/;
        const numberRegex = /\d/;
        const specialCharacterRegex = /[$&+,:;=?@#|'"<>.^*()%!-]/;
        const hasUpperLetter = upperLetterRegex.test(password);
        const hasLowerLetter = lowerLetterRegex.test(password);
        const hasNumber = numberRegex.test(password);
        const hasSpecialCharacter = specialCharacterRegex.test(password);
        const errors = [];

        if (passwordlength <= 8){
            errors.push ("La contraseña debe tener como minimo 8 caracteres")
        }
        if(!hasUpperLetter){
            errors.push ("La contraseña debe tener una letra mayúscula")
        }
        if(!hasNumber){
            errors.push("La contraseña debe tener al menos un numero")
        }
        if(!hasLowerLetter){
            errors.push("La contraseña debe tener al menos una letra minuscula")
        }
        if(!hasSpecialCharacter){
            errors.push("La contraseña debe tener un caracter especial")
        }

        if(errors.length > 0){
            errors.forEach((error) => {
                passwordErrors.innerHTML += `${error}<br>`;
            });
        }
    })


    })
