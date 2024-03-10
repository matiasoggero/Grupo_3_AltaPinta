window.addEventListener("load",() => {
    const emailLogin = document.querySelector("#emailLogin");
    const passwordLogin = document.querySelector("#passwordLogin");
    const iconLogin = document.querySelector("#togglePasswordIcon")


    emailLogin.addEventListener("focus",() => {
        emailErrors.innerHTML ="";
    });

    emailLogin.addEventListener("blur",(event)=>{
     const containsAtSymbol = event.target.value.includes("@");
     const errors = [];
        
        if(!containsAtSymbol){
            errors.push("Debes ingresar un email válido")
        }

        errors.forEach((error) => {
            emailErrors.innerHTML += `${error}`;
        })
    });

    passwordLogin.addEventListener("change",(event)=>{
        passwordErrors.innerHTML = "";
        const password = event.target.value;
            if(event.target.value !== passwordLogin.value){
                errors.push("La contraseña es imcorrecta")
            }
            if(errors.length > 0){
                errors.forEach((error) => {
               passwordErrors.innerHTML += `${error}<br>`;
                })
            }
    });

    iconLogin.addEventListener("click", (e) =>{
        if(passwordLogin.type === "password"){
          passwordLogin.type = "text";
          iconLogin.classList.remove("bx-show")
          iconLogin.classList.add("bx-hide")
        }else{
          passwordLogin.type = "password";
          iconLogin.classList.add("bx-show")
          iconLogin.classList.remove("bx-hide")
        }
      })
});