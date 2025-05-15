/*boton historia*/

const botonHistoria= document.querySelector(".btnHistoria");

botonHistoria.addEventListener("click", (event)=>{
    event.preventDefault();

    window.location.href= "archivosHtml/seccionHistoria.html";
})

/*boton Registro */



const botonRegistro= document.querySelector(".btnRegistro");

botonRegistro.addEventListener("click", (event)=>{
    event.preventDefault();

    window.location.href= "archivosHtml/registroUsuario.html";
})