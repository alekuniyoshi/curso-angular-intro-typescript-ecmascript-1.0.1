import { calulcarIva, Producto } from "./05-Desestructuracion ";


const carritoDeCompra: Producto[] = [
    {
        precio: 1000,
        desc: '42" 4K'
    },
    {
        precio: 2000,
        desc: 'Freezer'
    }
];

const [total, isv] = calulcarIva(carritoDeCompra);

console.log('total 1:', total);
console.log('iva 1: ', isv);