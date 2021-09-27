//variable persona igual a un objeto

var persona = {

    //dentro del objeto se definen propiedades
    nombre: "Jhonatan",
    apellido: "Otalvaro",
    edad: 23,
    //declaracion de un objeto hijo
    direccion: {
        pais: "pais",
        ciudad: "pueblo",
        conjunto: "conjunto",
        torre: 123124,
        apartamento: 4434123,
        datos:{
            telefono: 123123124,
            numeroComputadores: 45,
            numeroTelevisores: 2,
            numeroHabitaciones: 3,
            numeroBaños: 2
        }
    }
};

//la notacion de punto es una manera de JavaScript que nos da la opcion para obtener los valores de un objeto

/* console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log("El sujeto vive en: ",persona.direccion);
console.log("Su pais natal es: ",persona.direccion.pais);
console.log("Actualmente reside en: ",persona.direccion.ciudad);
console.log("Actualmente reside en el conjunto: ",persona.direccion.conjunto);
console.log("En la torre: ",persona.direccion.torre);
console.log("En el apartamento: ",persona.direccion.apartamento); */

//agregar propiedad nueva al objeto persona
//una de las maneras es:    
persona.direccion.zipCode = 1234;
/*console.log("Codigo postal: ",persona.direccion.zipCode);

//la notacion de puntos nos permite decir que por cada nivel jerarquico es un punto 

console.log(persona.direccion.datos.telefono);*/

var datos = persona.direccion.datos;

datos.nunmeroPersonas = "dos personas viven en el apartamento";

console.log(persona);

//Estructura de mi equipo en Indra
var indra = {

    proyecto: "BancoPopular",
    integrantes: "Martha, Daniel, Roberto, Oscar, Manuel, Jhonatan",
    liderEquipo: "Francisco Reyes",

    
    
    datosIntegrantes: {

    jhonatan: {
        rango: "Joven profesional"
    },

    martha: {
        rango: "Senior"
    },

    daniel: {
        rango: "Senior"
    },

    roberto: {
        rango: "Senior"
    },

    oscar: {
        rango: "Senior"
    },

    manuel: {
        rango: "SemiSenior"
    },

    francisco:{
        rango: "Arquitecto"
    },
    
    datos: {

    datosMartha: {
        edad: "no se",
        cargo: "pruebas",
        sede: "norte"
    },

    datosDaniel: {
        edad: "no se",
        cargo: "pruebas",
        sede: "norte"
    },
    
    datosRoberto: {
        edad: "no se",
        cargo: "DesarrolladorJAVA",
        sede: "norte"
    }, 

    datosOscar: {
        edad: "no se",
        cargo: "Linux",
        sede: "norte"
    }, 

    datosManuel: {
        edad: "no se",
        cargo: "Analista y desarrollador",
        sede: "norte"
    }, 

    datosJhonatan: {
        edad: "23",
        cargo: "Analista",
        sede: "norte"
    }
        }
},



    proyectosIntegrantes: {

        proyectosMartha: {
            pruebas: "Banco Popular",
            documentacion: "ARN"
        },

        
        proyectosJhonatan: {
            pruebas: "Banco Popular",
            analisis: "Banco Popular",
            desarrollo: "ARN",
            documentacion: "Bolt"
        },

        
        proyectosManuel: {
            pruebas: "Banco Popular",
            analisis: "Banco Popular",
            desarrollo: "ARN y Bolt",
        },

    }

};

console.log(indra);


console.log(datos);

var proyectosJhonatan = indra.proyectosIntegrantes.proyectosJhonatan;

console.log(proyectosJhonatan);

console.log("notacion de corchetes -------------------------------------------------------------------------------------------------------------------------------");



var campo = "edad";

console.log(persona["direccion"]);

console.log(persona["direccion"]["pais"]);

console.log(persona[campo]);







