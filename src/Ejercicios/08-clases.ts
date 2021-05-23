

class PersonaNormal {

    constructor(
        public nombre: String,
        public direccion: String
    ) { }
}


class hero extends PersonaNormal {
    constructor(
        public alterEgo: String,
        public edad: number,
        public nombreReal: String
    ) {
        super(nombreReal, 'Ciudad de Buenos Aires, Av de los incas 5435');
    }
}
const heroe = new hero('IronMan', 42, 'Tony Stark');
console.log(heroe);