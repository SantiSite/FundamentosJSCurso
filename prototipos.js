function heredaDe(prototipoHijo, prototipoPadre) {
    let fn = function () {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(name, lastname, altura) {
    this.name = name;
    this.lastname = lastname;
    this.altura = altura;
    // return this;
}

Persona.prototype.saludar = function () {
    // debugger;
    console.log(`Hola, soy ${this.name} ${this.lastname}`);
}

Persona.prototype.alto = function () {
    if (this.altura >= 1.80) {
        return console.log('Soy alto');
    }
    return console.log('No soy alto');
}

function Desarrollador(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.name} ${this.lastname} y soy Desarrolador web`)

}

// let sacha = new Persona('Sacha', 'Castro', 1.64);
// let santi = new Persona('Santiago', 'Restrepo', 1.74);
// let pedro = new Persona('Pedro', 'Caicedo', 1.84);
// let juan = new Persona('Juan', 'Villada', 1.80);

// const personas = [sacha, santi, pedro, juan];

// for (let persona of personas) {
//     console.group('Persona');
//     persona.saludar();
//     persona.alto();
//     console.groupEnd();
// }
