const path = require('node:path')
//Path te permite trabajar con las rutas

//Crear rutas es una mala practica


//`./content/subfolder/test.txt` <- PROHIBIDO por el SO por la posicion de las barras
// Unix / Win \
console.log(path.sep) // <- Saber cual es la barra del SO 

//Crea la ruta uniendolas con el path
const filePath = path.join('curso_nodejs', '3_Native_module', 'hola.txt');
console.log(filePath); //<- Retorna el path con el formato del SO

//Obtener el NOMBRE DEL FICHERO
const base = path.basename('\\tmp\\secret\\password.txt')
console.log(base)

//Obtener el NOMBRE DEL FICHERO SIN EL TIPO
const filename= path.basename('\\tmp\\secret\\password.txt', '.txt')
console.log( filename)

//Obtiene la extension
const extension = path.extname('image.jpg');
console.log(extension)