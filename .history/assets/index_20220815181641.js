let pizza1 = {
    id: '1',
    nombre: 'Muzarella',
    ingredientes: [
        'tomate', 'muzarella', 'oregano'
    ],
    precio: '$600'
}
let pizza2 = {
    id: '2',
    nombre: 'Napolitana',
    ingredientes: [
        'jamon', 'huevo', 'queso'
    ],
    precio: '$300'
}
let pizza3 = {
    id: '3',
    nombre: 'Americana',
    ingredientes: [
        'huevoFrito', 'peperoni', 'roquefort'
    ],
    precio: '$200'
}
let pizza4 = {
    id: '4',
    nombre: 'Rucula',
    ingredientes: [
        'verduras', 'palmito', 'especias'
    ],
    precio: '$500'
}
let pizza5 = {
    id: '5',
    nombre: 'Especial',
    ingredientes: [
        'salsa', 'harina', 'crema'
    ],
    precio: '$800'
}
let pizza6 = {
    id: '6',
    nombre: 'DE_LA_CASA',
    ingredientes: [
        'anchoas', 'pimientos', 'hongos'
    ],
    precio: '$900'
}

let pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]

pizzas.forEach(function pizza(e, i, array) {

    //listado de pizzas
    console.log('La pizza ' + e.nombre + ' tiene un precio de ' + e.precio + ' , un id de ' + e.id)


    //pizzas con id impar
    if (e.id % 2 == 1) console.log('Las pizzas con id impar son: ' + e.nombre)

    //pizzas menores a $600

    if (e.precio < "600") console.log('Las pizzas con un valor menos a $600 son: ' + e.nombre)
})