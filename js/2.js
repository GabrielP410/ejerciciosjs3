let ciudades = [];

while (true) {
  var ciudad = prompt('Ingrese el nombre de una ciudad (o seleccione cancelar para finalizar):');
  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}



document.write('<p>El arreglo tiene ' + ciudades.length + ' elementos</p>');

document.write('<ul>');
document.write('<li>Elemento en 1er posicion'  + ciudades[0] + '</li>');
document.write('<li>Elemento en 3er posicion' + ciudades[2] + '</li>');
document.write('<li>Elemento en ultima posicion' + ciudades[ciudades.length - 1] + '</li> <br>');
ciudades.push('París, Francia');
document.write('<li>Elemento en ultima posicion' + ciudades[ciudades.length - 1] + '</li>');

document.write('</ul>');



ciudades[1] = 'Barcelona, España';

document.write('<p>Ciudad en la segunda posición: ' + ciudades[1] + '</p>');

document.write('<p>Arreglo actualizado:</p>');
document.write('<ul>');
for (let j = 0; j < ciudades.length; j++) {
  document.write('<li>' + ciudades[j] + '</li>');
}
document.write('</ul>');