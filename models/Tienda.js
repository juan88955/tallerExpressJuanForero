import { Schema, model } from 'mongoose';

let collection = 'tiendas'; // nombre de la colección
// Definir esquema del modelo
let schema = new Schema({
    nombre: { type: String, required: true }, // campo nombre
    direccion: { type: String, required: true }, // campo direccion
    telefono: { type: Number, required: true } // campo telefono
}, {
    timestamps: true // se guardan los tiempos de creación y actualización
});

// Crear modelo
let Tienda = model(collection, schema);
export default Tienda;