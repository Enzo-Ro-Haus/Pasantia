//Sincrono
const fs = require('node:fs')
//Le tuve que poner la ruta exacta ya que no reaccionaba
console.log("Entra al primero")
const text = fs.readFileSync('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola.txt', 'utf-8')
console.log(`Info de archivo: ${text}`)

console.log("Despues del primero.")

console.log("Entra al segundo")
const text2 = fs.readFileSync('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola2.txt', 'utf-8')
console.log(`Info de archivo: ${text}`)