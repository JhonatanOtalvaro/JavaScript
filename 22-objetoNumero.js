//Objeto Número

var a = 10;
var b = new Number(10);

//toFixed

var c = 10.231241251;
console.log(c.toFixed(5));

//toString

c = c.toString();
console.log(c)

//toPresicion

var d = 12.3423434324;
console.log(d);
console.log(d.toPrecision(4));

//Cuantos números soporta la variable numérica: 308, después de 308 muestra en pantalla la propiedad infinity

d = 10;
d *= 10000000000000000000000;

console.log(d);

//ValueOF

var e = new Number("20");
console.log(b);
console.log(b.valueOf());
