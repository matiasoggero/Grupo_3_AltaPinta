window.addEventListener("load", () => {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const imageInput = document.querySelector("#avatar");
  const passwordInput = document.querySelector("#password");
  const confirm_passwordInput = document.querySelector("#confirm_password");
  const iconInputs = document.querySelectorAll(".bx");
  const form = document.getElementById("registerForm");


  const nameErrors = document.querySelector("#nameErrors");
  const emailErrors = document.querySelector("#emailErrors");
  const imageErrors = document.querySelector("#imageErrors");
  const passwordErrors = document.querySelector("#passwordErrors");
  const confirm_passwordErrors = document.querySelector(
    "#confirmPasswordErrors"
  );

  const validateName = (nameInput) => {
    const currentInputLength = nameInput.value.length;
    const errors = [];

    if (currentInputLength <= 2) {
      errors.push("Debes completar correctamente este campo");
    }

    errors.forEach((error) => {
      nameErrors.innerHTML += `${error}`;
    });

    return errors.length === 0;

  }

  const validateEmail = (emailInput) => {
    const containsAtSymbol = emailInput.value.includes("@");
    const errors = [];

    if (!containsAtSymbol) {
      errors.push("Debes ingresar un email válido");
    }

    errors.forEach((error) => {
      emailErrors.innerHTML += `${error}`;
    });

    return errors.length === 0;
  }

  const validateImage = (imageInput) => {
    const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
    const imageName = imageInput.value;
    const imageNameParts = imageName.split(".");
    const fileExtension = imageNameParts.slice(-1)[0].toLowerCase();
    const isAllowed = allowedExtensions.indexOf(fileExtension) >= 0;
    const errors = [];

    if (!isAllowed) {
      errors.push("Debes adjuntar un archivo válido (jpg, jpeg, png)");
    }

    if (errors.length === 0) {
      imageErrors.innerHTML = "";
    } else {
      errors.forEach((error) => {
        imageErrors.innerHTML += `${error}<br>`;
      });
    }

    return errors.length === 0;

  }

  const validatePassword = (passwordInput) => {
    passwordErrors.innerHTML = "";
    const password = passwordInput.value;
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

    if (passwordlength <= 8) {
      errors.push("La contraseña debe tener como minimo 8 caracteres");
    }
    if (!hasUpperLetter) {
      errors.push("La contraseña debe tener una letra mayúscula");
    }
    if (!hasNumber) {
      errors.push("La contraseña debe tener al menos un numero");
    }
    if (!hasLowerLetter) {
      errors.push("La contraseña debe tener al menos una letra minuscula");
    }
    if (!hasSpecialCharacter) {
      errors.push("La contraseña debe tener un caracter especial");
    }

    if (errors.length > 0) {
      errors.forEach((error) => {
        passwordErrors.innerHTML += `${error}<br>`;
      });
    }

    return errors.length === 0;

  } 

  const validateConfirmPassword = () => {
    const errors = [];

    if (confirm_passwordInput.value !== passwordInput.value) {
      errors.push("No hay coincidencia con la contraseña anterior");
    }

    if (errors.length > 0) {
      errors.forEach(error => {
        confirm_passwordErrors.innerHTML += `${error} \n`;
      })
    }

    return errors.length === 0;

  }

  nameInput.addEventListener("focus", () => {
    nameErrors.innerHTML = "";
  });

  nameInput.addEventListener("blur", (event) => {
    validateName(event.target);
  });

  emailInput.addEventListener("focus", () => {
    emailErrors.innerHTML = "";
  });

  emailInput.addEventListener("blur", (event) => {
    validateEmail(event.target);
  });

  imageInput.addEventListener("change", (event) => {
    validateImage(event.target);
  });

  passwordInput.addEventListener("change", (event) => {
    validatePassword(event.target);
  });

  confirm_passwordInput.addEventListener("focus", () => {
    confirm_passwordErrors.innerHTML = "";
  });

  confirm_passwordInput.addEventListener("blur", (event) => {
    validateConfirmPassword(event.target);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const validName = validateName(e.target.elements.name);
    const validEmail = validateEmail(e.target.elements.email);
    const validPass = validatePassword(e.target.elements.password);
    const validConfirmPass = validateConfirmPassword()

    if (validName && validEmail && validPass && validConfirmPass) {
      e.target.submit();
    }
  });

  iconInputs.forEach(input => {
    
    input.addEventListener("click", e =>{
      const parent = e.target.parentElement;
      const element = parent.classList.contains("confirm-password") ? confirm_passwordInput : passwordInput;

      if(element.type === "password"){
        element.type = "text";
        e.target.classList.remove("bx-show")
        e.target.classList.add("bx-hide")
      }else{
        element.type = "password";
        e.target.classList.add("bx-show")
        e.target.classList.remove("bx-hide")
      }
    })
  })
});
