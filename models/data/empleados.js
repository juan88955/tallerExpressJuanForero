import "dotenv/config.js";
import '../../config/database.js'
import Empleado from '../Empleado.js'

let empleados = [
    {
        nombre: "Juan Fernández",
        cargo: "Gerente General",
        salario: 6000
    },
    {
        nombre: "María López",
        cargo: "Directora de Marketing",
        salario: 5500
    },
    {
        nombre: "Carlos Rodríguez",
        cargo: "Jefe de Ventas",
        salario: 4500
    },
    {
        nombre: "Ana Martínez",
        cargo: "Desarrolladora Senior",
        salario: 4000
    },
    {
        nombre: "Pedro Sánchez",
        cargo: "Contador",
        salario: 3800
    },
    {
        nombre: "Laura Gómez",
        cargo: "Diseñadora Gráfica",
        salario: 3200
    },
    {
        nombre: "Miguel Ángel Torres",
        cargo: "Analista de Datos",
        salario: 3700
    },
    {
        nombre: "Isabel Ruiz",
        cargo: "Recursos Humanos",
        salario: 3500
    },
    {
        nombre: "Roberto Vargas",
        cargo: "Ingeniero de Sistemas",
        salario: 4200
    },
    {
        nombre: "Carmen Ortiz",
        cargo: "Asistente Ejecutiva",
        salario: 2800
    },
    {
        nombre: "Javier Morales",
        cargo: "Supervisor de Producción",
        salario: 3300
    },
    {
        nombre: "Elena Castro",
        cargo: "Representante de Servicio al Cliente",
        salario: 2600
    },
    {
        nombre: "Andrés Mendoza",
        cargo: "Técnico de Mantenimiento",
        salario: 2400
    },
    {
        nombre: "Sofía Herrera",
        cargo: "Analista de Marketing Digital",
        salario: 3100
    },
    {
        nombre: "Diego Flores",
        cargo: "Coordinador de Logística",
        salario: 2900
    }
];

Empleado.insertMany(empleados)
    .then(() => {
        console.log('Datos de empleados insertados correctamente');
        process.exit(0);
    })
    .catch(error => {
        console.error('Error al insertar datos de empleados:', error);
        process.exit(1);
    });