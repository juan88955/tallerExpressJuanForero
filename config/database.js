import mongoose from 'mongoose';

// Configuración de la conexión a la base de datos
let url = process.env.URI_MONGO;

// URL de la base de datos
console.log(url);

// Conexión a la base de datos
async function coneccionBaseDeDatos() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log('Base de datos conectado')
    } catch (error) {
        console.log(error)
    }
}

coneccionBaseDeDatos()