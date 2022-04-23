





// Pagina ayuda

let id = 0;

class Producto {
    constructor (nombre, unidades, precio,){
        this.id = id++;
        this.nombre = nombre.toUpperCase();
        this.unidades = unidades.toUpperCase();
        this.precio = precio.toUpperCase();
    }
}

// Array

let CrearProductos = [
    new Producto(
        "Arroz",
        "20",
        "$100",
    ),
    new Producto(
        "Aceite de Oliva",
        "12",
        "$300",
    ),
    new Producto(
        "Fideos Matarazzo",
        "30",
        "$90",
    ),
    new Producto(
        "Coca Cola",
        "24",
        "$115",
    ),
    new Producto(
        "Azucar",
        "40",
        "$60",
    ),
    new Producto(
        "Leche",
        "20",
        "$60",
    ),
]

console.log(CrearProductos)

// Funciones

const crearProducto = function() {
    id++;
    let productoNuevo = new Producto (
     id,
     nombre,
     cantidad,
     precio,

    );

    // Pushear productos


    return nuevoProducto

}


console.log(JSON.stringify(CrearProductos));

const agregarProductos = () =>{
    CrearProductos.push(crearProducto())
}


// cantidad de productos
const cantidadProductos =() => CrearProductos.length;

// ordenar por precio
const ordenarPorPrecio = () => {

}

// Eliminar productos

const eliminarProducto = function(Producto){
    const indice = CrearProductos.indexOf(Producto);
    console.log("Eliminar producto " + indice + Producto.id)

    if(indice > -1){
        CrearProductos.splice(indice, 1);
        localStorage.removeItem(Producto.id)
    }
}


// Manipulacion del DOM

let productosTotales = document.getElementsByClassName("productosTotales")
let formNuevoProducto = document.getElementsByClassName("row g-3 j")

const crearCardProducto = function(){
    if(localStorage.length === 0){
        for(let producto of CrearProductos){
        agregarProductos(producto)
    }
  } else {
      CrearProductos = [];
      Object.keys(localStorage).forEach(function(key){
          let producto = JSON.parse(localStorage.getItem(key));
          CrearProductos.push(producto);
      })
  }
}


