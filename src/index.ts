class hero {
    constructor(
        public alterEgo: String,
        public edad: number,
        public nombreReal: String
    ) { }
}
const heroe = new hero('IronMan',42,'Tony Stark');
console.log(heroe);