

interface heroe {
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => string,
}

interface Direccion {
    calle: string,
    numero: number,
    pais: string

}
const superHeroe: heroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: '56 st',
        numero: 40,
        pais: 'USA'
    },

    mostrarDireccion() {
        return this.nombre + ' vive en  ' + this.direccion.calle + ' ' + this.direccion.numero + ' ' + this.direccion.pais;
    }

}

console.log(superHeroe.mostrarDireccion());