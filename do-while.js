let contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador += 1;
} while (!llueve());

console.log(`Fui a ver si llovia ${contador} ${contador === 1 ? 'vez' : 'veces'}`);
