import { Schema, model } from 'mongoose';


// Definir esquema del modelo
let collection = 'empleados';
let schema = new Schema({
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    salario: { type: Number, required: true }
}, {
    timestamps: true
});

// Crear modelo
let Empleado = model(collection, schema);
export default Empleado;