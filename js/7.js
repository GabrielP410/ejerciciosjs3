function mostrarTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

let numeroIngresado = prompt("Ingrese un número para ver su tabla de multiplicar:");

numeroIngresado = parseFloat(numeroIngresado);

if (!isNaN(numeroIngresado)) {
    mostrarTablaMultiplicar(numeroIngresado);
} else {
    document.write("Por favor, ingrese un número válido.");
}
