// Invocar Modulo File System
const fs = require('fs');

let crearSerie = (cantidad) => {
	// Creamos una promesa para luego poder capturarlo y enviarlo.
	return new Promise((resolve, reject) => {
		// Declaración de Variables
		let fibo1 = 1;
		let fibo2 = 1;
		let serie = '';

		serie += (`${fibo1}\t`);

		for(let i = 2; i <= cantidad - 1; i++){
			serie += (`${fibo2}\t`);
			fibo2 = fibo1 + fibo2;
			fibo1 = fibo2 - fibo1;
		}

		// Creamos un archivo txt, donde guardaremos nuestra serie Fibonacci.
		fs.writeFile('fibonacci.txt', serie, (err) => {
			if(err)
				reject ('Error al crear el archivo'); 
			else 
				resolve('El archivo ha sido creado con exito!');	
		}); 
		});
}

// Exportamos el metodo
module.exports = {
	crearSerie
}