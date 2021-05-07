const baseUrl = 'https://swapi.dev/api/';
const peopleUrl ='people/:id';
const options = { crossDomain: true };

// arguments es un array que contiene los valores de los argumentos que se le pasan a dicha funcion.
// arguments esta en todas las funciones.
// fail es un metodo que captura el error. Recibe por parametro una funcion.
function fetchCharacter(id) {
    return new Promise(function (resolve, reject) {
        const url = `${baseUrl}${peopleUrl.replace(':id', id)}`;
        $.get(url, options, function (data) {
            resolve(data);
        }).fail(function () {
            reject(id);
        });
    });
}

// Recorrer el array y devolver las promesas dependiendo del id del array (Promesas en paralelo).
// let ids = [1, 2, 3, 4, 5, 6, 7];
// let promises = ids.map((id) => {
//     return fetchCharacter(id);
// });
//
// Promise.all(promises)
//     .then(characters => console.log(characters))
//     .catch(error => (console.log('Ocurrio un error.'))
//     );

// Promesas encadenadas
// fetchCharacter(1)
//     .then(function (character1) {
//         console.log(`El nombre del personaje es: ${character1.name}`);
//         return fetchCharacter(2);
//     })
//     .then(function (character2) {
//         console.log(`El nombre del personaje es: ${character2.name}`);
//         return fetchCharacter(3);
//     })
//     .then(function (character3) {
//             console.log(`El nombre del personaje es: ${character3.name}`);
//             return fetchCharacter(4);
//     })
//     .then(function (character4) {
//         console.log(`El nombre del personaje es: ${character4.name}`);
//         return fetchCharacter(5)
//     })
//     .then(function (character5) {
//         console.log(`El nombre del personaje es: ${character5.name}`);
//         return fetchCharacter(6);
//     })
//     .then(function (character6) {
//         console.log(`El nombre del personaje es: ${character6.name}`);
//         return fetchCharacter(7);
//     })
//     .then(function (character7) {
//         console.log(`El nombre del personaje es: ${character7.name}`);
//         return fetchCharacter(8);
//    })
//     .then(function (character8) {
//         console.log(`El nombre del personaje es: ${character8.name}`);
//         return fetchCharacter(9);
//     })
//     .then(function (character9) {
//         console.log(`El nombre del personaje es: ${character9.name}`);
//     })
//     .catch(function (id) {
//     console.log(`Sucedio un error al obtener el personaje ${id}`);
// });


// En la siguiente funcion se utilizra async y await (lo ultimo en js)
async function fetchCharacters() {
    const ids = [1, 2, 3, 4, 5, 6, 7];
    const promises = ids.map((id) => (fetchCharacter(id)));
    try {
        let characters = await Promise.all(promises);
        console.table(characters);
    } catch (error) {
        console.log(`Ocurrio un error: ${error}`);
    }
}

fetchCharacters();
