//En node no vamos a tener todo nuestro codigo en un fichero por ello se utiliza
//el patron de diseno modular, el codigo se exporta. Se utiliza el sistema Common js (deprecada)
function sum (a, b){
    return a + b;
}

module.exports = { //Una forma de obligar a usar el mismo nombre es con un obj
    sum
}
