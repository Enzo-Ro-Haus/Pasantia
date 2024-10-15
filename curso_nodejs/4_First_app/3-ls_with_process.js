const fs = require('node:fs');

const folder = process.argv[2] ?? '.' //Esto nos permite ingresar la direccion como un arg
//Recuerda siempre respetar la forma en la que se escriben y desde donde 
//Ej: node 3-ls_with_process.js "../2_Export_ESModules"
//En el falsy si no encuentra el primero como argumento toma la direccion del directorio actual.

fs.readdir(folder, (err, files) => { //En los callbacks siempre se maneja el error primero
    if(err){
        console.error('Error to read a directory');
        return;
    }

    files.forEach(file => {
        console.log(file);
    })
})
