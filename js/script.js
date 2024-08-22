document.getElementById("btn__iniciar-sesion").addEventListener("click",Login);
document.getElementById("btn__registrarse").addEventListener("click",registro);


let contenedor_login_registro = document.querySelector(".contenedor__login-registro");
let formulario_login = document.querySelector(".formulario__login");
let formulario_registro = document.querySelector(".formulario__registro");
let caja_trasera_login = document.querySelector(".caja__trasera--login");
let caja_trasera_registro = document.querySelector(".caja__trasera--registro");

function Login(){
    formulario_registro.style.display = "block";
    contenedor_login_registro.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
}

function registro(){
    formulario_registro.style.display = "none";
    contenedor_login_registro.style.left = "410px";
    formulario_login.style.display = "block";
    caja_trasera_registro.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
}
