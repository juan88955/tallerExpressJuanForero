import Empleado from "../../models/Empleado.js";

// crear un solo empleado
let createEmployee = async (req, res, next) => {
    try {
        let empleado = req.body;
        let newEmpleado = await Empleado.create(empleado);
        res.status(201).json(newEmpleado);
    } catch (error) {
        next(error)
    }
};

// crear múltiples empleados
let createManyEmployees = async (req, res, next) => {
    try {
        let empleados = req.body;
        let newEmpleados = await Empleado.insertMany(empleados);
        res.status(201).json(newEmpleados);
    } catch (error) {
        next(error)
    }
};

export {createEmployee, createManyEmployees}