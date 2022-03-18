let form = document.getElementById("formularioRegistro");
let tabla = document.getElementById("tabla");

form.addEventListener("submit", function(evento) {

    evento.preventDefault();
    let formularioRegistro = new FormData(form);
    let datosUsuario = {
        nombres: formularioRegistro.get("nombres"),
        Apellidos: formularioRegistro.get("Apellidos"),
        Usuario: formularioRegistro.get("Usuario"),
        Contraseña: formularioRegistro.get("Contraseña"),
        Correo: formularioRegistro.get("Correo"),
    };

    agregarFila(datosUsuario);
});

function agregarFila(datosUsuario) {
    let fila = tabla.insertRow(-1);

    let columnaNombre = fila.insertCell(0);
    columnaNombre.textContent = datosUsuario.nombres;

    columnaApellidos = fila.insertCell(1);
    columnaApellidos.textContent = datosUsuario.Apellidos;

    columnaUsuario = fila.insertCell(2);
    columnaUsuario.textContent = datosUsuario.Usuario;

    columnaContraseña = fila.insertCell(3);
    columnaContraseña.textContent = datosUsuario.Contraseña;

    ColummnaCorreo = fila.insertCell(4);
    ColummnaCorreo.textContent = datosUsuario.Correo;

    let eliminarCelda = fila.insertCell(5);
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    eliminarCelda.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", (evento) => {
        alert("Se hizo click en eliminar");
        evento.target.parentNode.parentNode.remove();
    });
}