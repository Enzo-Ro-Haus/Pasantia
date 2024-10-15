//Async - await (Asincrono secuencial) Asincrono por que mientra el archivo se lee no esta
//haciendo nada con el otro archivo.
const { readFile } = require('node:fs/promises');

//IIFE, se utiliza por que sino la otra forma es hacerlo con mjs
(
    async () =>{
        console.log("Entra al primero")
        const text = await readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola.txt','utf-8')
        console.log(`Primer texto: ${text}`) 
        console.log("Entre textos")
        console.log("Entra al segundo")
        const text2 = await readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola2.txt', 'utf-8')
        console.log(`Primer texto: ${text2}`)
    }
)(); //<- Se crea y se ejecuta

//Es lo mismo que hacer 
// async function init(){
//     console.log("Entra al primero")
//         const text = await readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola.txt','utf-8')
//         console.log(`Primer texto: ${text}`) 
//         console.log("Entre textos")
//         console.log("Entra al segundo")
//         const text2 = await readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola2.txt', 'utf-8')
//         console.log(`Primer texto: ${text2}`)
// }

// init()