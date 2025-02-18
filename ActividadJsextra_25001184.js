// Juego de adivinar si un número es mayor o menor
function jugar() {
    let jugarDeNuevo = true;
    while (jugarDeNuevo) {
        // Generar número aleatorio entre 1 y 9
        let numeroComputadora = Math.floor(Math.random() * 9) + 1;
        let numeroUsuario;

        // Pedir número al usuario entre 3 y 6
        do {
            numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
        } while (numeroUsuario < 3 || numeroUsuario > 6);

        // Pedir predicción al usuario
        let eleccion = prompt("¿Cree que su número es MAYOR, MENOR o IGUAL al de la computadora? (Escriba: mayor, menor o igual)").toLowerCase();

        // Determinar el resultado
        let mensaje = `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. `;
        if ((eleccion === "mayor" && numeroUsuario > numeroComputadora) ||
            (eleccion === "menor" && numeroUsuario < numeroComputadora) ||
            (eleccion === "igual" && numeroUsuario === numeroComputadora)) {
            mensaje += "¡Ha adivinado!";
        } else {
            mensaje += "No ha adivinado.";
        }
        alert(mensaje);

        // Preguntar si desea jugar de nuevo
        let respuesta = prompt("¿Quiere jugar otra vez? (SI/NO)").toLowerCase();
        if (respuesta !== "si") {
            let nombre = prompt("Ingrese su nombre:");
            let carnet = prompt("Ingrese su número de carnet:");
            alert(`Gracias por jugar, ${nombre}. Número de carnet: ${carnet}.`);
            jugarDeNuevo = false;
        }
    }
}

// Iniciar el juego
jugar();
