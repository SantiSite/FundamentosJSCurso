const baseUrl = 'https://swapi.dev/api/';
const peopleUrl ='people/:id';
const options = { crossDomain: true };

/**
 * arguments es un array que contiene los valores de los argumentos que se le pasan a dicha funcion.
 * arguments esta en todas las funciones.
 */

function fetchCharacter(id, callback) {
    const url = `${baseUrl}${peopleUrl.replace(':id', id)}`;
    $.get(url, options, callback).fail(function () {
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`);
    })
}

// Callbacks

fetchCharacter('1', function (data, status) {
    console.group('The Star Wars');
    console.log(`Hola soy ${data.name}`);
    console.log(arguments);
    console.log(`gender: ${arguments[0].gender}`);
    console.log(`Status: ${status}`);
    console.groupEnd();

    fetchCharacter('2', function (data, status) {
        console.group('The Star Wars');
        console.log(`Hola soy ${data.name}`);
        console.log(arguments);
        console.log(`gender: ${arguments[0].gender}`);
        console.log(`Status: ${status}`);
        console.groupEnd();
        fetchCharacter('3', function (data, status) {
            console.group('The Star Wars');
            console.log(`Hola soy ${data.name}`);
            console.log(arguments);
            console.log(`gender: ${arguments[0].gender}`);
            console.log(`Status: ${status}`);
            console.groupEnd();

            fetchCharacter('4', function (data, status) {
                console.group('The Star Wars');
                console.log(`Hola soy ${data.name}`);
                console.log(arguments);
                console.log(`gender: ${arguments[0].gender}`);
                console.log(`Status: ${status}`);
                console.groupEnd();

                fetchCharacter('5', function (data, status) {
                    console.group('The Star Wars');
                    console.log(`Hola soy ${data.name}`);
                    console.log(arguments);
                    console.log(`gender: ${arguments[0].gender}`);
                    console.log(`Status: ${status}`);
                    console.groupEnd();

                    fetchCharacter('6', function (data, status) {
                        console.group('The Star Wars');
                        console.log(`Hola soy ${data.name}`);
                        console.log(arguments);
                        console.log(`gender: ${arguments[0].gender}`);
                        console.log(`Status: ${status}`);
                        console.groupEnd();

                        fetchCharacter('7', function (data, status) {
                            console.group('The Star Wars');
                            console.log(`Hola soy ${data.name}`);
                            console.log(arguments);
                            console.log(`gender: ${arguments[0].gender}`);
                            console.log(`Status: ${status}`);
                            console.groupEnd();

                            fetchCharacter('8', function (data, status) {
                                console.group('The Star Wars');
                                console.log(`Hola soy ${data.name}`);
                                console.log(arguments);
                                console.log(`gender: ${arguments[0].gender}`);
                                console.log(`Status: ${status}`);
                                console.groupEnd();
                            });
                        });
                    });
                });
            });
        });
    });
});
