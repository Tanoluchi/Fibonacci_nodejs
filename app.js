// Llamamos al modulo serie para ejecutar todo el archivo.
const serie = require('./serie');

// Enviamos las veces que queremos ejecutar la serie
let cantidad = 10;

// Capturamos el mensaje del metodo exportado.
serie.crearSerie(cantidad)
	.then(mensaje => console.log(mensaje))
	.catch(mensaje => console.log(mensaje))