//variable primitiva: nombre

//Buena practica: colocar todas las funciones al principio del archivo

/* function imprimir( nombre, apellido ){

    //maneras de definir un parametro sin invocarlo en consola
    //apellido = apellido || "xxxx";

    // === Valor y objeto son lo mismo
    /*if( apellido === undefined ){
        apellido = "xxxx";
    }*/

    //console.log(nombre + " " + apellido);

//}  

//invocar la funcion
//Variable anonima: Jhonatan
//imprimir("Jhonatan", "Otalvaro");

//---------------------------------------------------------//


//Funciones con objeto

/*function imprimir( persona ){

    console.log(persona.nombre + " " + persona.apellido);

}

//objeto

imprimir({

    nombre: "Jhonatan",
    apellido: "Otalvaro"

});*/

//-------------------------------------------------------------

//llamar una funcion anonima

/*  function imprimir2( fn ){

    //console.log(mismaPersona.segundoNombre + "  "  + mismaPersona.segundoApellido);

    //Todos los cambios son por referencia

    //mismaPersona.segundoNombre = "Jhonatan2";

    //-----------------------------------------------------------------------------//
    
    //mandar una funcion a una funcion

    fn();

}

var persona = {

    segundoNombre: "Andres",
    segundoApellido: "Palma"

}

//funcion anonima

imprimir2( function(){

    console.log("Funcion anonima");

}); */

//---------------------------------------------------------------------------------------------//

//llamar una funcion explicita
function imprimir( fn ){

    fn();

}

var persona = {

    nombre: "Jhonatan",
    apellido: "Otalvaro"

}


var miFuncion = function(){

    console.log("miFuncion");

}

imprimir( miFuncion );


