//process: Es un obj global que brinda info actual sobre el proceso de ejecucion
// tiene propiedades y metodos que te permite interactuar con el entorno de nodejs
//y te brindan info ligada al proceso actual.

//Argumentos de entrada del proceso actual
console.log(process.argv) //<- argv son los argumentos que recibe por linea de comando
//Estos arg son tomados como un array
//Probar en la terminal:
// node 2-process.js Esto son argumentos
//y retorna un array con la direccion de node, del archivo y cada palabra por separada.

//Tambien podemos controlar el proceso y su salida: (Esta comentado por que sino me termina la ejecucion)
//process.exit(0) //<- El proceso ha ido bien y termina allí
//process.exit(1) //<- El proceso a fallado y queremos que salga.

//Podemos controlar eventos del proceso:
process.on('exit' , () => {
    //limpiar los recursos o la consola
});

//Metodos como el current working directory cwd
console.log(process.cwd()) //<- No dice desde qué carpeta lo estamos ejecutando 

//hay mucha info desde la id, uso de la cpu etc
console.log(process.env.SALUDO) //<- Retorna las variables de entorno: ejecucion o desarrollo
//En la terminal powershell $env:SALUDO="hola"; node 2-process.js
//retorna el valor de la variable

