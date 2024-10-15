import "dotenv/config.js";
import '../../config/database.js'
import Empleado from '../Empleado.js'

let empleados = [
    { nombre: "Carolina Pérez", cargo: "Gerente General", salario: 7000 },
    { nombre: "Felipe Gómez", cargo: "Director Financiero", salario: 6300 },
    { nombre: "Sara Torres", cargo: "Jefa de Recursos Humanos", salario: 5200 },
    { nombre: "Manuel Rivas", cargo: "Ingeniero de Software", salario: 4500 },
    { nombre: "Adriana Salazar", cargo: "Diseñadora UX/UI", salario: 3500 },
    { nombre: "Oscar Mendoza", cargo: "Analista de Datos", salario: 4100 }
];

// Insertar datos en la base de datos
Empleado.insertMany(empleados)
    .then(() => {
        console.log('Datos de empleados insertados correctamente');
        process.exit(0);
    })
    .catch(error => {
        console.error('Error al insertar datos de empleados:', error);
        process.exit(1);
    });