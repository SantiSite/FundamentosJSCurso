let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

let personas = [sacha, alan, martin, dario, vicky, paula];

// let acum = 0;
//
// for (let i = 0; i < personas.length; i++) {
//     acum = acum + personas[1].cantidadDeLibros;
// }

const reducer = (acum, { cantidadDeLibros }) => (acum + cantidadDeLibros)

let totalLibros = personas.reduce(reducer, 0);

console.log('Total de libros de todas las personas:', totalLibros);
