var fecha = new Date( 2021, 4, 28 );
console.log(fecha);

//Sumar días a la fecha manualmente

fecha.setDate(2);
console.log(fecha)

//Sumar días a la fecha automaticamente
Date.prototype.sumarDias = function( dias ){

    this.setDate( this.getDate() + dias );
    return this; 

}

console.log("Fecha actual:",fecha);
console.log("Días sumados:",fecha.sumarDias(5));
console.log("Días restados:",fecha.sumarDias(-5));
console.log("Días restados:",fecha.sumarDias(-20));

//Sumar años a la fecha automaticamente
Date.prototype.sumarAnios = function( anios ){

    this.setFullYear( this.getFullYear() + anios );
    return this; 

}

console.log("Años");
console.log(fecha);
console.log("Años sumados:",fecha.sumarAnios(1));