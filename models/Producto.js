import { Schema, model } from 'mongoose';

let collection = 'productos';
// Definir esquema del modelo
let schema = new Schema({
    nombre: { type: String, required: true },// campo nombre
    marca: { type: String, required: true }, // campo marca
    tipo: { type: String, required: true }, // campo tipo
    precio: { type: Number, required: true } // campo precio
}, {
    timestamps: true // se guardan los tiempos de creación y actualización
});

let Producto = model(collection, schema);
export default Producto;