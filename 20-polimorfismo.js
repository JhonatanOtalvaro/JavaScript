//Polimorfismo

//es una función que puede recibir diferentes tipos de parámetros
//sin definir los parámetros

function determinaDato( a ){

    if(a === undefined){

        console.log("'a' no está definido.");

    }

    if(typeof a === "number"){

        console.log("'a' es un número.");

    }

}

determinaDato();

//-----------------------------------------------------------------
//definiendo los parámetros

function determinaDato1( a ){

    if(a === undefined){

        console.log("'a' no está definido.");

    }

    if(typeof a === "number"){

        console.log("'a' es un número.");

    }

}

determinaDato1(1);

//-----------------------------------------------------------------

function determinaDato2( a ){

    if(typeof a === "string"){

        console.log("'a' es un texto");

    }

}

determinaDato2("Jhonatan");

//-----------------------------------------------------------------

function determinaDato3( a ){

    if(typeof a === "object"){

        console.log("'a' es un objeto");

    }

}

determinaDato3({

    nombre: "Jhonatan"

});
