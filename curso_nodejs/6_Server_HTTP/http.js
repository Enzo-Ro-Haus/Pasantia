//Ojo que el proceso queda en ejecución en segundo plano
const http = require('node:http') //Modulo nativo

//Creamos el servidor, con la funciones basicas
// Request:     recibir una peticion
// Responde:    devolver una respuesta
//(Esta es solo la parte del servidor)
const server = http.createServer((req, res) => {
    console.log('Request recived') //No se vera en el navegador dado que solo se ejecutan en el servidor
    res.end('Hola mundo')
}) 

//Esta es la parte donde debe escuchar
//.listen permite elegir el puerto, si 
//se coloca el 0 el programa elige el primero que encuentre libre
server.listen(0, () =>{
    const port = server.address().port
    //Al colocarse http://localhost: te permite ir directamente a la direccion, no es recomendable para produccion donde el puerto es fijo 
    console.log(`Server listening on port http://localhost:${port}`) 
})