var arregloVacio = [



];

console.log(arregloVacio);

var arregloBooleanos = [

    true,
    false,
    true

];

console.log(arregloBooleanos);

var arregloObjetoAnonimoConBooleanos = [

    true,

    {

        nombre: "Jhonatan",
        apellido: "Otalvaro"

    },

    false

];

console.log(arregloObjetoAnonimoConBooleanos);

//Función, ver el largo de un arreglo

console.log(" la cantidad de propiedades en este arreglo es de: ",arregloBooleanos.length);
console.log(" la cantidad de propiedades en este arreglo es de: ",arregloObjetoAnonimoConBooleanos);

var arregloFuncionAnonima = [

    true,

    {

        nombre: "Jhonatan",
        apellido: "Otalvaro"

    },

    function mensaje(){

        console.log("Soy una función anónima dentro de un arreglo.");

    },

    function recibeObjeto( persona ){

        console.log( persona.nombre + " " + persona.apellido );

    },

    false

];

console.log(arregloFuncionAnonima);
console.log(arregloFuncionAnonima[0]);
console.log(arregloFuncionAnonima[1].nombre + " " + arregloFuncionAnonima[1].apellido);
arregloFuncionAnonima[2]();
console.log(arregloFuncionAnonima[3]);



