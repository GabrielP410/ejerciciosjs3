function calcularPerimetro(a, b) {
    return 2 * (a + b);
}
 let ladoA = parseFloat(prompt("Ingresa el valor del lado A:"));
 let ladoB = parseFloat(prompt("Ingresa el valor del lado B:"));

 if (isNaN(ladoA) || isNaN(ladoB)) {
     alert("Por favor, ingresa valores numéricos válidos.");
 } else {
     let perimetro = calcularPerimetro(ladoA, ladoB);
     alert("El perímetro del rectángulo es: " + perimetro);
 }
