// Llamamos al modulo serie para ejecutar todo el archivo.
const serie = require('./serie');

let argv = process.argv;
// Capturamos el valor string pasado por consola, luego lo separamos para capturar el valor numerico.
let valor = argv[2].split('=')[1];

// El valor que ingresaron por consola lo asignamos a una variable, que esta después sera pasado a nuestro metodo crearSerie.
let cantidad = valor;

// Capturamos el mensaje del metodo exportado.
serie.crearSerie(cantidad)
	.then(mensaje => console.log(mensaje))
	.catch(mensaje => console.log(mensaje))