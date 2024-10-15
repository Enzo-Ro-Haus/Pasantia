const fs = require('node:fs');

fs.readdir('.', (err, files) => { //En los callbacks siempre se maneja el error primero
    if(err){
        console.error('Error to read a directory');
        return
    }

    files.forEach(file => {
        console.log(file);
    })
})

//Para saber si el archivo existe
//Sin promesas
console.log("Existe? " + fs.existsSync('.'));
//Con promesas
//const fs = require('node:fs/promises');
//fs.stat('.')