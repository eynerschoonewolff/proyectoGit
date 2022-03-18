const acceso = () => {

    var user = document.getElementById("usu").value;
    var pass = document.getElementById("pass").value;

    User_passstora = window.localStorage

    for (i = 0; i <= 3; i++) {
        if (user == usuariosArray[i].email) {
            if (pass == usuariosArray[i].password) {
                if (usuariosArray[i].typeuser == "Administrador") {
                    alert('Tipo de usuario 1')
                } else if (usuariosArray[i].typeuser == "Estudiante") {
                    alert('Tipo de usuario 2')
                    window.location.href = "html/orientaciones.html"
                } else if (usuariosArray[i].typeuser == "Psicologo") {
                    window.location.href = "html/seguimiento.html"
                } else {
                    alert('Contrseaña incorrecta')
                    i = 3
                }
            } else {
                alert('Contrseaña incorrecta')
                i = 3
            }
        }
    }
}

var usuariosArray = [

    {
        email: "edwin@gmail.com",
        password: "123456789",
        nombre: "Edwin",
        apellido: "Conrado",
        typeuser: "Administrador",
        celular: "3022109942",
        cedula: "1001963493"
    }, {
        email: "eyner@gmail.com",
        password: "holamundo",
        nombre: "Eyner",
        apellido: "Perez",
        typeuser: "Estudiante",
        celular: "3145876181",
        cedula: "1111111111"
    }, {
        email: "kelly@gmail.com",
        password: "contraseñasegura",
        nombre: "Kelly",
        apellido: "Aragon",
        typeuser: "Psicologo",
        celular: "321954678",
        cedula: "222222222"
    }

]