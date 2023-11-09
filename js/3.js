function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function simularLanzamientos() {
    const resultados = [];
  
    for (let i = 0; i < 50; i++) {
        const dado1 = lanzarDado();
        const dado2 = lanzarDado();
        const suma = dado1 + dado2;
        if (!resultados[suma]) {
            resultados[suma] = 1;
        } else {
            resultados[suma]++;
        }
    }
  
    return resultados;
}

const resultadosLanzamientos = simularLanzamientos();

document.write("<ul>");
document.write("<li>suma : apariciones</li>");
for (let i = 2; i < resultadosLanzamientos.length; i++) {
    const suma = i;
    const apariciones = resultadosLanzamientos[i] || 0;
   
    document.write(`<li>${suma}: ${apariciones}</li>`);
}

document.write("</ul>");

  