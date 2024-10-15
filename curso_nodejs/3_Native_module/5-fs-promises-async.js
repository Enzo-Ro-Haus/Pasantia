//Promesas: Con las promesas no te tenés que preocupar de hacer los callbaks
const fs = require('node:fs/promises')

console.log("Entra al primero")
fs.readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola.txt',
    'utf-8').then(text => {
    console.log(text)
})

console.log("Mientras se leen.")

console.log("Entra al segundo")
fs.readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola2.txt', 
    'utf-8').then(text => {
        console.log(text)
    })