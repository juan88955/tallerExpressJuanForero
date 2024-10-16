import "dotenv/config.js";
import '../../config/database.js'
import Empleado from '../Empleado.js'

//array de empleados
let empleados = [
    { nombre: "Carolina Pérez", cargo: "Gerente General", salario: 7000 },
    { nombre: "Felipe Gómez", cargo: "Director Financiero", salario: 6300 },
    { nombre: "Sara Torres", cargo: "Jefa de Recursos Humanos", salario: 5200 },
    { nombre: "Manuel Rivas", cargo: "Ingeniero de Software", salario: 4500 },
    { nombre: "Adriana Salazar", cargo: "Diseñadora UX/UI", salario: 3500 },
    { nombre: "Oscar Mendoza", cargo: "Analista de Datos", salario: 4100 },
    { nombre: "Laura Martínez", cargo: "Gerente de Marketing", salario: 5500 },
    { nombre: "Carlos Ruiz", cargo: "Desarrollador Full Stack", salario: 4800 },
    { nombre: "Ana Soto", cargo: "Especialista en SEO", salario: 3800 },
    { nombre: "Javier Luna", cargo: "Gerente de Ventas", salario: 5800 },
    { nombre: "Gabriela Ortiz", cargo: "Asistente Administrativo", salario: 2800 },
    { nombre: "Roberto Vargas", cargo: "Ingeniero de Sistemas", salario: 4600 },
    { nombre: "Patricia Núñez", cargo: "Contadora", salario: 4200 },
    { nombre: "Miguel Ángel Rojas", cargo: "Diseñador Gráfico", salario: 3600 },
    { nombre: "Sofía Herrera", cargo: "Especialista en Redes Sociales", salario: 3300 }
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