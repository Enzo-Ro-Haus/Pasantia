//Asincronia en paralelo, lee ambos y retorna cuando ya se haya hecho

import { readFile } from 'node:fs/promises'

Promise.all([ 
    readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola.txt','utf-8'),
    readFile('C:\\Users\\ENZO\\Desktop\\Node\\Pasantia\\curso_nodejs\\3_Native_module\\hola2.txt', 'utf-8')
]).then(([text,  secondText]) => {
    console.log(`Primer texto: ${text}`);
    console.log(`Segundo texto: ${secondText}`);
})
