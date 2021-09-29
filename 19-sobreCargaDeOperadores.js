//Sobre carga de operadores

//lo siguiente en javaScript no funciona

function crearProducto(){



}

function crearProducto(nombre){

    

}

function crearProducto(nombre, precio){

    

}

//----------------------------------------------

//sin los parámetros definidos

function productCreation(name, price){

    name = name || "no name";
    price = price || 0;

    console.log("name:", name, " & ", "price:", price);

}

productCreation();

//----------------------------------------------

//con un parámetro definido

function productCreation2(name, price){

    name = name || "no name";
    price = price || 0;

    console.log("name:", name, " & ", "price:", price);

}

productCreation2("Pencil");

//----------------------------------------------
//sobrecargando los parámetros

function productCreation3(name, price){

    name = name || "no name";
    price = price || 0;

    console.log("name:", name, " & ", "price:", price);

}

function productCreation100(name){

    productCreation3(name, 100);

}

productCreation3("Pencil");
productCreation100("Eraser");

//----------------------------------------------
function productCreation4(name, price){

    name = name || "no name";
    price = price || 0;

    console.log("name:", name, " & ", "price:", price);

}

function productCreation100(name){

    productCreation4(name, 100);

}

function productCreationShirt(price){

    productCreation4("Shirt", price);

}

productCreation4("Pencil");
productCreation100("Eraser");
productCreationShirt(76);
