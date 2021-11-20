let edad, final;
edad = prompt("¿Cuál es tu edad?", "0");

if (isNaN(edad)) {
    final = (edad > 18) ? "Acceso permitido" : "Acceso denegado";
}

document.write(final);