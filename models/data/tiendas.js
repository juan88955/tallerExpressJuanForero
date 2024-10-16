import "dotenv/config.js";
import '../../config/database.js'
import Tienda from '../Tienda.js'

// array de tiendas
let tiendas = [
    { nombre: 'Éxito', direccion: 'Av. Carrera 68 #75-50, Bogotá', telefono: 6015942000 },
    { nombre: 'Jumbo', direccion: 'Calle 80 #60-1, Bogotá', telefono: 6014845000 },
    { nombre: 'Carulla', direccion: 'Cra. 9 #122-29, Bogotá', telefono: 6017445555 },
    { nombre: 'Falabella', direccion: 'Centro Comercial Santa Fe, Bogotá', telefono: 6017422410 },
    { nombre: 'Homecenter', direccion: 'Calle 170 #72-50, Bogotá', telefono: 6013077115 }
];

// Insertar datos en la base de datos
Tienda.insertMany(tiendas) // insertar datos en la colección tiendas
    .then(() => {
        console.log('Datos de tiendas insertados correctamente'); // mensaje de exito
        process.exit(0);
    })
    .catch(error => {
        console.error('Error al insertar datos de tiendas:', error); // mensaje de error
        process.exit(1);
    });