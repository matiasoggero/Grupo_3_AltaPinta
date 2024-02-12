const messageInput = document.querySelector("input.message");

window.addEventListener("load",function(){
    const currentInputLength = event.target.value.length;
    const errors = {};
    let nameInput = this.document.querySelector("#name")
    nameInput.addEventListener("blur",(event)=>{
    })

    let emailInput = this.document.querySelector("#email")
    emailInput.addEventListener("blur",(event)=>{
    })

    let domicilioInput = this.document.querySelector("addres")
    domicilioInput.addEventListener("blur",(event)=>{
    })

   let imagenInput = this.document.querySelector("avatar")
   imagenInput.addEventListener("blur",(event)=>{

   })
   if(currentInputLength == null){
    errors.push("Debes completar correctamente este campo")}
    if(errors.length > 0){
        this.preventDefault();
    }

})

 /* const currentInputLength = event.target.value.length;
        if (currentInputLength <= 2) {
       nameInput.innerHtml = "El campo debe tener más de 2 caracteres"}

       message="Debes completar correctamente este campo"
    })*/
//en focus limpiarlo cdo vuelve a escribir
