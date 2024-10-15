/**
 * Este caso, el promisfy, solo debe usarse si por algun motivo
 * los modulos nativos que queremos utilizar no lo traen consigo (puede que 
 * solo tengan callbacks que era el metodo clasico)
 */

const fs = require('node:fs')
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log("Entra al primero")
fs.readFilePromise('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola.txt',
    'utf-8').then(text => {
    console.log(text)
})

console.log("Mientras se leen.")

console.log("Entra al segundo")
fs.readFilePromise('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola2.txt', 
    'utf-8').then(text => {
        console.log(text)
    })