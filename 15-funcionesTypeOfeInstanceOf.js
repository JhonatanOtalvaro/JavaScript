//Funciones typeOf e InstanceOf

//typeOf
function identifica(parametro){

  //  console.log(typeof parametro);

    if( typeof parametro == "Function" ){

        parametro();

    }else{

        console.log(parametro);

    }

}

function Persona(){ 

    this.nombre = "Jhonatan";
    this.edad = 23;

}

var Jhonatan = new Persona();

/*identifica("hola");
identifica({});
identifica(1);
identifica(Jhonatan);
identifica(function(){});

identifica(function(){ console.log("Funcion anónima"); });*/

identifica(Jhonatan);

