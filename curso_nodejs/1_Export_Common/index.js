const { sum } = require('./sum') // Importacion Common js con la destructuracion de la llave
console.log(sum(2,3));

console.log("Hola Mundo");
console.log(globalThis); //Variable global de toda la app. Puede usarse global pero la forma correcta es This
/**
 * Tod lo que es global es una propiedad de la variable global global
 * así tambien globalThis, Math, etc)
 */

