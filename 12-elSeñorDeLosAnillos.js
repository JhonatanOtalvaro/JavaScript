//EL Señor De Los Anillos: The JavaScriptGame

function Jugador(nombre){

    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function( jugadorObjetivo ){


        if(this.sp >= 40){

        this.sp -= 40;
        jugadorObjetivo.pv += 20;

        }else{

            console.info(this.nombre + " no tiene energía ");

        }

        this.estado(jugadorObjetivo);
        
    }

    this.tirarFlecha = function(jugadorObjetivo){

        if(jugadorObjetivo.pv > 40){

            jugadorObjetivo.pv -= 40;

        }else{

            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + "Jugador muerto");

        }

        jugadorObjetivo.pv -= 0;
        this.estado(jugadorObjetivo);

    }

    this.estado = function(jugadorObjetivo){

        console.info(this);
        console.info(jugadorObjetivo);

    }

};

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);

console.log(gandalf);
console.log(legolas);
