var hoy = new Date();
console.log("Fecha actual:",hoy);
console.log("Año actual:",hoy.getFullYear());
console.log("Dia actual:",hoy.getDate());
console.log("Hora actual:",hoy.getHours());
console.log("MiliSegundos:", hoy.getMilliseconds());
console.log("Mes:", hoy.getMonth());
console.log("Segundos:", hoy.getSeconds());
console.log("Representación numérica en mili segundos de una fecha:", hoy.getTime());

var miliSegundos = new Date(1);
console.log(miliSegundos);

//year, month, day, hour, miliSeconds
var fechaFija = new Date( 2021, 4, 28, 20, 10, 15);
console.log(fechaFija);

var Dia = new Date(); 
for(var i = 0; i < 15000; i++){

console.log("Algo...");

}

var noche = new Date();
//console.log(Dia);
//console.log(noche);

var duracion = noche.getTime() - Dia.getTime();
console.log((duracion/1000), "Segundos");
console.log(duracion, "MiliSegundos");