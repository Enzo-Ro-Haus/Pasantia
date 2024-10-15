//.mjs <- Para usar ES modules RECOMENDADO A DIA DE HOY 
//.cjs <- Fuerza el uso de CommonJS
//.js <- CommmonJS por defecto
import { sum, sub, mult, div } from './sum.mjs'

console.log(`Suma con mjs: ${sum(2,3)}`);
console.log(`Resta con mjs: ${sub(2,3)}`);
console.log(`Producto con mjs: ${mult(2,3)}`);
console.log(`Division con mjs: ${div(2,3)}`);