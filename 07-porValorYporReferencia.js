//las variables primitivas siempre se pasan por valor

var a = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);

//objetos

var c = {
    nombre: "Jhonatan"
}

var d = c;

console.log("c: ", c);
console.log("d: ", d);

// cambio de valor para la propiedad 'nombre' del objeto 'c'

// cuando son objetos los que se están igualando, siempre se pasan por referencia

c.nombre = "Andrés";

console.log("c: ", c);
console.log("d: ", d);

d.nombre = "Otalvaro";

console.log("c: ", c);
console.log("d: ", d);

