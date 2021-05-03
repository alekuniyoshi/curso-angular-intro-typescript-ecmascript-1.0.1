let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: String;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Alejandro',
    hp: 200,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Hogar';

console.table(personaje);