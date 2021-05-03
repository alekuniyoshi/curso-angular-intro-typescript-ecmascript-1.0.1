interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalle: Detalle
}

interface Detalle {
    autor: string,
    anio: number,

}

const reproductor: Reproductor = {
    volumen: 22,
    segundo: 11,
    cancion: 'be yourself',
    detalle: {
        autor: 'Cris Cornel',
        anio: 2010
    }
}

const { volumen, segundo, cancion, detalle } = reproductor;
const { autor, anio } = detalle;

console.log(volumen);
console.log(segundo);
console.log(cancion);
console.log(autor);
console.log(anio);


const dbz: string[] = ['Goku', 'Vegeta', 'Gohan'];
const [p1, p2, p3] = dbz;

console.log('Personaje 1', p1);
console.log('Personaje 2', p2);
console.log('Personaje 3', p3);
