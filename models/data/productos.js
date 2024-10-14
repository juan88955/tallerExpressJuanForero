import "dotenv/config.js";
import '../../config/database.js'
import Producto from '../Producto.js'

let productos = Array.from({ length: 100 }, (_, i) => ({
    nombre: `Producto ${i + 1}`,
    marca: `Marca ${Math.floor(i / 20) + 1}`,
    tipo: `Tipo ${Math.floor(i / 10) + 1}`,
    precio: `$${Math.floor(Math.random() * 1000) + 1}`
}));

Producto.insertMany(productos)
    .then(() => {
        console.log('Datos de productos insertados correctamente');
        process.exit(0);
    })
    .catch(error => {
        console.error('Error al insertar datos de productos:', error);
        process.exit(1);
    });