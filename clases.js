// Aprenderemos como pasar funciones como parametros, como hacer clases constructores y su herencia

class Persona {
    constructor(name, lastname, height) {
        this.name = name;
        this.lastname = lastname;
        this.height = height;
    };

    saludar(responderSaludo) {
        let { name, lastname } = this;
        console.log(`Hi, my full name is ${name} ${lastname}`);
        if (responderSaludo) {
            responderSaludo(name, lastname, false);
        }
    };

    soyAlto() {
        return this.altura > 1.8;
    };

}

class Developer extends Persona {
     constructor(name, lastname, height) {
         super(name, lastname, height);
     }

     saludar(responderSaludo) {
         let { name, lastname } = this;
         console.log(`Hi, I'm ${name} ${lastname} and I'm Web Developer`)
         if (responderSaludo) {
             responderSaludo(name, lastname, true);
         }
     }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira, no sabia que eras desarrollador/a`)
    }
}

let sacha = new Persona('Sacha', 'Lifszyc', 1.72);
let santi = new Developer('Santi', 'Restrepo', 1.74);
let aleja = new Persona('Alejandra', 'Correa', 1.64);

sacha.saludar();
santi.saludar(responderSaludo);
aleja.saludar(responderSaludo);
