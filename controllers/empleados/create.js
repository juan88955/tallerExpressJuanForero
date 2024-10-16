import Empleado from "../../models/Empleado.js";

// crear un solo empleado
let createEmpleado = async (req, res) => {
    try {
        let empleado = req.body;
        let newEmpleado = await Empleado.create(empleado);
        res.status(201).json(newEmpleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// crear múltiples empleados
let createManyEmpleados = async (req, res) => {
    try {
        let empleados = req.body;

        if (!Array.isArray(empleados)) {
            return res.status(400).json({ message: "Se espera un array de empleados" });
        }

        let newEmpleados = await Empleado.insertMany(empleados);
        res.status(201).json(newEmpleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createEmpleado, createManyEmpleados };