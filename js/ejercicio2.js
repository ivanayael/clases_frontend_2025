function generarProductos () {
    const productos = [
        {id: 1, name: 'Camisa', description: 'Camisa Blanca planchada manga corta', amount: 20},
        {id: 2, name: 'Pantalon', description: 'Pantalon de jean Azul', amount: 50},
        {id: 3, name: 'Zapatos', description: 'Zapatos color negro con pespunte', amount: 50},
        {id: 4, name: 'Medias', description: 'Medias tipo zoquete blancas', amount: 20},
    ];
    return productos;
}

let resultado = generarProductos();

for (let index = 0; index < resultado.length; index++) {
    const datos_producto = resultado[index];
    console.log(datos_producto.id)
    console.log(datos_producto.description)
    console.log(datos_producto.name)
    console.log(datos_producto.amount)
}