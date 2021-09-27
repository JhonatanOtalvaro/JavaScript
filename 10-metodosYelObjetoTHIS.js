//Métodos y el objeto THIS

//los objetos tienen propiedades y métodos

//los métodos son funciones dentro del objeto

var persona = {

    nombre: "Jhonatan",
    apellido: "Otalvaro",
    //se define el metodo
    imprimirNombre: function(){

        console.log(this.nombre + " " + this.apellido);

    },

    direccion: {

        pais: "Colombia",
        obtenerPais: function(){

            var self = this;
            
            var nuevaDireccion = function(){

                console.log(self);
                console.log("La dirección es en " + self.pais);

            }

            nuevaDireccion();

        }

    }

};

persona.nombre = "Andrés";
persona.imprimirNombre();
persona.direccion.obtenerPais();

