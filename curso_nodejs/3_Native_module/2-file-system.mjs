import { statSync } from 'node:fs';

console.log('File System');
console.log('------ SINCRONO -------')

const stats = statSync('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola.txt')

console.log(
    '\nSi es fichero: ' +
    stats.isFile(),
    '\nSi es directorio: ' +
    stats.isDirectory(),
    '\nSi es un enlace simbólico: ' +
    stats.isSymbolicLink(),
    '\nTamanio en bytes: ' +
    stats.size,
)