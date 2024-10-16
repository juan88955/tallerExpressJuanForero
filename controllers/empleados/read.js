import Empleado from '../../models/Empleado.js';

// endpoint: /api/empleados
let getAllEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// endpoint: /api/empleados/nombre/:nombre
let getEmpleadoPorNombre = async (req, res) => {
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
let getEmpleadosPorCargo = async (req, res) => {
    try {
        const empleados = await Empleado.find({ cargo: req.params.cargo });
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllEmpleados, getEmpleadoPorNombre, getEmpleadosPorCargo };