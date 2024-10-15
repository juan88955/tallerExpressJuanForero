import { Schema, model } from 'mongoose';

// Definir esquema del modelo
let collection = 'tiendas';
let schema = new Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true }
}, {
    timestamps: true
});

// Crear modelo
let Tienda = model(collection, schema);
export default Tienda;