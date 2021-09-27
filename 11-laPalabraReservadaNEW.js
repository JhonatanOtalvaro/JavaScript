//La palabra reservada NEW 

//var carlos = new Persona();

function Persona(){

    this.nombre = "Jhonatan";
    this.apellido = "Otalvaro";
    this.edad = 30;
    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido + "(" + this.edad +")";
    }

    console.log("pasó por aquí");
}

var Jhonatan = new Persona();

console.log(Jhonatan);
console.log(Jhonatan.nombre);
console.log(Jhonatan.imprimirPersona());