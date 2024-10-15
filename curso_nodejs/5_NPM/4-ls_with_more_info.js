const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    let files;
    try{
        files = await fs.readdir(folder); //Intenta tomar un array de los directorios locales (Async secuencial)
    }catch{ // Si no existen tira error y cierra el proceso
        console.error(pc.redBright(`❌ Cant read the directories: ${folder}`)) 
        process.exit(1);
    }
    //En caso de que los tenga los recorre con un map
    const filesPromises = files.map(async file => { //Async paralelo/ map no para los procesos, los mapea todos a la vez
        const filePath = path.join(folder, file)
        let stats;
        try{ //Es valido siempre que sea necesario, por ej en operaciones de lectua
            stats = await fs.stat(filePath) // y obtiene su info del archivo 
        }catch{
            console.error(`Cant read the arhives: ${filePath}`)
            process.exit(1);
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'D' : 'F'
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString()

        return `${pc.magenta(fileType)} ${pc.blue(file.padStart(25))} ${pc.green(fileSize.toString().padStart(20))} ${pc.yellow(fileModified.padStart(10))}`
    });  

    const filesInfo = await Promise.all(filesPromises);
    filesInfo.forEach(info => console.log(info));
}

ls(folder);
