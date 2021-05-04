function sumar(a: number, b: number): number {
    return a + b;
}

console.log('Suma', sumar(10, 6));

function multiplicar(a: number, b?: number, c: number = 2): number {
    return a * c;
}

console.log('Multiplicacion', multiplicar(45, 12));
console.log('Multiplicacion', multiplicar(45, 12, 1));

interface personajeLOR {
    nombre: string,
    pv: number,
    mostrarHp: () => void,
}

function curar(personaje: personajeLOR, curarX: number): void {

    personaje.pv += curarX;
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Strider',
    pv: 70,
    mostrarHp() {
        console.log('Puntos de vida:', this.pv);
    }
}
nuevoPersonaje.mostrarHp();