function paridad(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

let numeroIngresado = prompt("Ingrese un número entero:");

let numeroEntero = parseInt(numeroIngresado);

if (!isNaN(numeroEntero)) {
    let resultado = paridad(numeroEntero);
    document.write(resultado);
} else {
    document.write("Por favor, ingrese un número válido.");
}
