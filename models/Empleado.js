import { Schema, model } from 'mongoose';

let collection = 'empleados'; // nombre de la colección
// Definir esquema del modelo
let schema = new Schema({
    nombre: { type: String, required: true }, // campo nombre
    cargo: { type: String, required: true }, // campo cargo
    salario: { type: Number, required: true } // campo salario
}, {
    timestamps: true // se guardan los tiempos de creación y actualización
});

// Crear modelo
let Empleado = model(collection, schema);
export default Empleado;