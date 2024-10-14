import "dotenv/config.js";
import '../../config/database.js'
import Tienda from '../Tienda.js'

let tiendas = [
    { nombre: 'Tienda A', direccion: 'Calle 1 #123', telefono: 1234567890 },
    { nombre: 'Tienda B', direccion: 'Avenida 2 #456', telefono: 2345678901 },
    { nombre: 'Tienda C', direccion: 'Carrera 3 #789', telefono: 3456789012 },
    { nombre: 'Tienda D', direccion: 'Plaza 4 #012', telefono: 4567890123 },
    { nombre: 'Tienda E', direccion: 'Bulevar 5 #345', telefono: 5678901234 }
];

Tienda.insertMany(tiendas)
    .then(() => {
        console.log('Datos de tiendas insertados correctamente');
        process.exit(0);
    })
    .catch(error => {
        console.error('Error al insertar datos de tiendas:', error);
        process.exit(1);
    });