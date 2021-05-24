function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('soy un string');
let soyNumber = queTipoSoy(1985);
let soyArreglo = queTipoSoy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(soyString);
console.log(soyNumber);
console.log(soyArreglo);

let soyExplicito = queTipoSoy<number>(120);
console.log(soyExplicito);