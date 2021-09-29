//Cuidado con las funciones y su contexto
//---------------------------------------
//Contexto global

function crearFunciones(){
//Contexto de la función

    var arreglo = [];
    var numero = 1;

    for( var numero = 1; numero <=3; numero++ ){

        arreglo.push(

            (function(numero){
            
                return function(){
    
                    console.log( numero );
            
                }
    
            })(numero)

        )

    }

    return arreglo;

}

var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
