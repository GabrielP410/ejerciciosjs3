const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write("<h2>Meses del año:</h2>");
document.write("<ul>");

meses.forEach(function(mes) {
    document.write("<li>" + mes + "</li>");
});

document.write("</ul>");

