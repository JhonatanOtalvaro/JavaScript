// el retonrno de las funciones

/* una funcion de JavaScript puede regresar: 
- un tipo primitivo
- un undefined
- un objeto o una funcion */

//---------------------------------------------------------------------------------------------------------

//Funcion que regresa un numero 

function obtenerAleatorio(){

    return Math.random();

}

console.log( obtenerAleatorio() + 10 );

//---------------------------------------------------------------------------------------------------------

//las funcion tambien regresan variables

function obtenerNombre(){

    return "Jhonatan";

}


//Tambien se pueden asignar a variables
nombre = obtenerNombre();

console.log( obtenerNombre() + " Otalvaro " );
//Se llama a consola mediante la variable
console.log( nombre + " Otalvaro " );

//-----------------------------------------------------------------------------------------------------------

//las funciones tambien regresan booleanos

function obtenerAleatorio2(){

    return Math.random();

}

function obtenerNombre2(){

    return "Andres";

}

function esMayor05(){

    if( obtenerAleatorio2() > 0.5 ){
        return true;
    }else{
        return false;
    }

}

console.log( obtenerAleatorio2() );
console.log( esMayor05() );

if( esMayor05() ){

    console.log( obtenerAleatorio2(), "Es mayor a 0.5" );

}else{

    console.log( obtenerAleatorio2(), "Es menor a 0.5" );

}

//-----------------------------------------------------------------------------------------------------------

//las funciones tambien regresan objetos

function crearPersona( edad, estatura ){

    //variable explicita

    //var obj = {};

    //variable anonima
    return {
        edad : edad,
        estatura : estatura
    }

}

var persona = crearPersona(23, 1.72);
console.log(persona);
console.log("su edad es: ", persona.edad);
console.log("su estatura es: ", persona.estatura);

//-----------------------------------------------------------------------------------------------------------

//funciones que regresan funciones

function creaFuncion(){


    //funcion anonima
    return function(telefono){

        console.log("Funcion creada exitosamente. " + "y mi telefono es: " + telefono);

        //funcion anonima
        return function(){

            console.log("Segunda funcion" );

        }

    }

}

var nuevaFuncion = creaFuncion();
var telefono = 1231312;
var segundaFuncion = nuevaFuncion( telefono );
segundaFuncion();