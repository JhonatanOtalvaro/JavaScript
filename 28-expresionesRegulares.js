///Buscan información dentro de cadenas de caracteres.
//Expresión regular de clase literal:
//En este caso va a buscar la letra 'a'.
var regular1 = RegExp("a");
//Otra forma de hacerlo.
var regular2 = /a/;
//String en el cual la expresión regular va a buscar la letra 'a'.
var texto = "Hola mundo.";
//función para invocar la expresión regular.
var arreglo = texto.match( regular1,/a/);
console.log(arreglo);
//----------------------------------------------------------------//
var regular3 = /a/;
var texto2 = "Estoy programando en JavaScript";
var arreglo2 = texto2.match(/a/);

console.log(arreglo2);