//Comentario de línea simple

/*

    Comentario multi-línea

*/

//Se pueden hacer comentarios dentro de cualquier objeto que queramos.

var arreglo = ["Jhonatan", {

    nombre: "Jhonatan",
    apellido: "Otalvaro",
    getNombre: function(){

        return this.nombre + " " + this.apellido;

    }

}, true, function(){ console.log(this); }];

console.log(arreglo);