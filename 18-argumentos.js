//Estructura de una función 
//Función argumentos

var arguments = 10;

function nuevaFuncion(a,b,c,d){

  
    console.log(arguments, a, b, c, d);

}

nuevaFuncion("Jhonatan", "Andrés", "Otalvaro", "Palma", {}, function(){});


function nuevaFuncion2(a,b,c,d){

  
    console.log(arguments, a, b, c, d);

}

//-------------------------------------------------------------------------

nuevaFuncion3(10,20,30,40);

function nuevaFuncion3(a,b,c,d){

    console.log( a + b + c + d );

}

nuevaFuncion3(10,20,30);

//-------------------------------------------------------------------------


nuevaFuncion4(10,20,30,40);

function nuevaFuncion4(a,b,c,d){

    console.log( a, b, c, d );

}

nuevaFuncion4(10,20,30);

//-------------------------------------------------------------------------

nuevaFuncion5(10,20,30,40);

function nuevaFuncion5(a,b,c,d){

    console.log( a, b, c, d );
    console.log( 30 + undefined );

}

nuevaFuncion5(10,20,30);

//-------------------------------------------------------------------------

nuevaFuncion6(10,20,30,40);

function nuevaFuncion6(a,b,c,d){

    if(arguments.length !== 4){

        console.error( "La función necesita 4 parámetros." );    
        return;

    }

    console.log( a + b + c + d );
    

}

nuevaFuncion6(10,20,30);

//-------------------------------------------------------------------------


nuevaFuncion7(10,20,30,40);

function nuevaFuncion7(a,b,c,d){

    if(arguments.length !== 4){

        console.error( "La función necesita 4 parámetros." );    
        return;

    }

    console.log( a + b + c + d );
    

}

nuevaFuncion7(10,20,30,40);
