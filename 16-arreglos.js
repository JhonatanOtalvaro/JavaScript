//Arreglos

//Los arreglos son una collección de objetos

//se puede definir de una manera
var arreglo1 = new Array();
//se puede definir de otra manera
var arreglo2 = [];
//Arreglo con números
//es un arreglo por que está en llaves cuadradas(corchetes)
//los arreglos en JavaScript son en base a 0
var arreglo3 = [5,4,3,2,1];
console.log(arreglo3);
//tomar una posición del arreglo
console.log("Posición número: " + arreglo3[0]);
console.log("Posición número: " + arreglo3[4]);
//Función "reverse": invierte el arreglo
arreglo3.reverse();
console.log(arreglo3);
//Función "map": regresa un arreglo

/*arreglo3 = arreglo3.map( function(elemento){

    elemento *= 2;
    return elemento;

});
console.log(arreglo3);*/

arreglo3 = arreglo3.map( function(elemento){

    elemento *= elemento;
    return elemento;

});
console.log(arreglo3);
//función para obtener la raiz cuadrada
arreglo3 = arreglo3.map(Math.sqrt);
console.log(arreglo3);
//join
arreglo3 = arreglo3.join("|");
console.log(arreglo3);
//Función opuesta del join
arreglo3 = arreglo3.split("|");
console.log(arreglo3);
//Función push
arreglo3.push("6");
console.log(arreglo3);
//Función unshift
arreglo3.unshift("0");
console.log(arreglo3);
//toString
console.log(arreglo3.toString());
//Eliminar el último elemento del arreglo
var eliminarArreglo = arreglo3.pop();
console.log(arreglo3, eliminarArreglo);
//Función splice, elimina el elemento de la posición seleccionada
//En mi caso: posición 1, elemento 1
arreglo3.splice( 1, 1 );
console.log(arreglo3);
//-------------------------------------
arreglo3.splice( 1, 1, "10", "20", "30", arreglo3.push("50"));
console.log(arreglo3);
//-------------------------------------
arreglo3.splice( 1, 0, "10", "20", "30", arreglo3.push("50"));
console.log(arreglo3);
//Funcion slice, opuesta al splice
arreglo3 = arreglo3.slice(0, 2);
console.log(arreglo3);






























