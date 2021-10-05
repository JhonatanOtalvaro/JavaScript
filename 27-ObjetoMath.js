var PI = Math.PI;
var E = Math.E;

console.log("Número PI:",PI);
console.log("Número E:",E);

var num1 = 10.12314123;

console.log("El valor impreso es:", num1);
console.log("El valor redondeado es:", Math.round(num1));
console.log("El valor redondeado más dos decimales es:", Math.round(num1*100)/100);
console.log("Valor entero del número:", Math.floor(num1));

var random = Math.random();
console.log("Número al azar:",random);

function randomEntre( minimo, maximo ){

    return Math.floor(Math.random() * (maximo-minimo + 1) + minimo );

}

console.log("Número aleatorio entre 1 y 6:",randomEntre(1,6));
//==========================================================//
console.log("Raíz cuadrada de 4:", Math.sqrt(4));
//==========================================================//
console.log("Exponente:", Math.pow(7,2));