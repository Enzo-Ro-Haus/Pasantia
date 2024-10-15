//Asincrono es mejor que sincrono por que no se bloquea
const fs = require('node:fs')

console.log("Entra al primero")
fs.readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola.txt', 
    'utf-8',
    (err, text) => {
        console.log(`Info de archivo: ${text}`)
    })

console.log("Mientras se leen.")

console.log("Entra al segundo")
fs.readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola2.txt', 
    'utf-8',
    (err, text) => {
        console.log(`Info de archivo: ${text}`)
    })