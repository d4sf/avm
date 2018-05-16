/* verifica que los datos del login no estén vacíos */
function verificarLogin () {
    if (!document.getElementById('logCedula').value && !document.getElementById('logPassword').value) {
        alert('Debe ingresar los datos para poder iniciar sesión.');
    }

    else {
        document.open("./perfil.html");
    }
}

/* verifica que los datos del registro no estén vacíos */
function verificarRegistrar () {
    if (!document.getElementById('reg-nombre').value && !document.getElementById('reg-apellido').value && !document.getElementById('reg-cedula').value && !document.getElementById('reg-password').value) {
        alert('Todos los datos son obligatorios');
    }

    else {
        alert('Registro exitoso! Inicie sesión para continuar');
    }
}

/* limpia el formulario de registro (está en desuso porque usamos el input:reset) */
function limpiarRegistrar() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('cedula').value = "";
    document.getElementById('password').value = "";
}