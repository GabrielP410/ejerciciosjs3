function analizarCadena() {
    var cadena = prompt("Ingrese una cadena de texto:");
  
    if (cadena === null || cadena === "") {
      document.write("No se ingresó ninguna cadena.");
    } else if (cadena === cadena.toUpperCase()) {
      document.write("La cadena está formada solo por mayúsculas.");
    } else if (cadena === cadena.toLowerCase()) {
      document.write("La cadena está formada solo por minúsculas.");
    } else {
      document.write("La cadena es una mezcla de mayúsculas y minúsculas.");
    }
  }
  analizarCadena();