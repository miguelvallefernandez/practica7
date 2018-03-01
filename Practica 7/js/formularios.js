var logon = false; //Se pondrá true cuando el usuario haya accedido correctamente

//Crear cookie

if (checkCookie("prueba", "prueba")) {


    document.getElementById('acceso-mostrado').style.display = "none";
    document.getElementById('oculto').style.display = "block";

    var nombreuser = document.getElementById("nombre-user");
    var texto = document.createTextNode("prueba");
    nombreuser.appendChild(texto);


    //alert("Hey");

}


function setCookie(nombre, valor, caducidad) {
    //Si no tenemos caducidad para la cookie, la definimos a 31 dias
    if (!caducidad)
        caducidad = 31

    var expireDate = new Date(); //coge la fecha actual
    expireDate.setDate(expireDate.getDate() + caducidad);

    //crea la cookie: incluye el nombre, la caducidad y la ruta donde esta guardada
    //cada valor esta separado por ; y un espacio
    document.cookie = nombre + "=" + valor + "; expires=" + expireDate.toGMTString() + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkCookie(usr, passwd) {
    var user = getCookie(usr);
    if (user != "" && user == passwd) {
        //logon = true;
        return true;
    } else {
        //logon = false;
        return false;
    }
    //return logon;
}

//setCookie("prueba", "prueba", 31);


function accederUsuario() {

    document.cookie = "prueba=prueba; expires= 31 Dec 2019 12:00:00 UTC";

    var user = document.getElementById("user").value;
    var passwd = document.getElementById("passwd").value;
    var log = checkCookie(user, passwd);


    if (log) {

        alert("Logeado como " + user);

        document.getElementById('acceso-mostrado').style.display = "none";
        document.getElementById('oculto').style.display = "block";

        var nombreuser = document.getElementById("nombre-user");
        var texto = document.createTextNode(user);
        nombreuser.appendChild(texto);

        $("#myModal").modal('hide');

        alert("Hey");

    }
    else {
        alert("Usuario invalido");
    }

}

function cerrarSesion() {
    var nombreuser = document.getElementById("nombre-user");
    var user = nombreuser.textContent;
    document.cookie = user + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    nombreuser.removeChild(nombreuser.firstChild);
    document.getElementById('acceso-mostrado').style.display = "block";
    document.getElementById('oculto').style.display = "none";
    deleteAllCookies();
}


function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}




