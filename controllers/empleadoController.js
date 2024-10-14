import Empleado from '../models/Empleado.js';

// endpoint: /api/empleados
export const getAllEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// endpoint: /api/empleados/nombre/:nombre
export const getEmpleadoPorNombre = async (req, res) => {
    try {
        const empleado = await Empleado.findOne({ nombre: req.params.nombre });
        if (!empleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// endpoint: /api/empleados/cargo/:cargo
export const getEmpleadosPorCargo = async (req, res) => {
    try {
        const empleados = await Empleado.find({ cargo: req.params.cargo });
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};