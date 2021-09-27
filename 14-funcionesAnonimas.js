//Funciones Anónimas

//encapsular código

var a = 10;

console.log("Valor inical de a: " + a);

function cambiarA(){

    a = 20;

}

cambiarA();
console.log("Se cambió el valor de a: " + a);



console.log("se evita eso usando funciones anonimas");

(function(){

    var b = 10;

    console.log("valor inicial de B: " + b);

    function cambiarB(){

        b = 20;

    }

    cambiarB();
    console.log("se cambió el valor de B: " + b);

})();

//Otro tipo de funcion

function ejecutarFuncion(fn){

    if(fn() === 1){

        return true;    

    }else{

        return false;

    }

    

};

console.log(

    ejecutarFuncion( function(){

        console.log("Funcion anonima ejecutada");
        return 1;
    
    })

);

