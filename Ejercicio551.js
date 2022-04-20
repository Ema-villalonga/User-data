// Ejercicio 551: Capturar datos del usuario usando la entrada estandar (teclado) usando Node.js.

const readline = require("readline");

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question('Cúal es su correo electronico?: ', function(respuesta){
    console.log(`Su correo electrónico es: ${respuesta}`);

    interfazCaptura.close();
});

