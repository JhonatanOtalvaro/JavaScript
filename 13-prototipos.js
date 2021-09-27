function Persona(){

    this.nombre = "Jhonatan";
    this.apellido = "Otalvaro";
    this.edad = 23;    
    this.pais = "Colombia";

}

//Agregar una propiedad de tipo primitiva

Persona.prototype.imprimirInformacion = function(){

    console.log( this.nombre + " " + this.apellido + " " + "tiene " + "(" + this.edad + ")" + " años" + " y vive en: " + this.pais);

}

var Jhonatan = new Persona();

console.log(Jhonatan);
Jhonatan.imprimirInformacion();
//de otra manera
console.log(Jhonatan.imprimirInformacion());