import Empleado from '../../models/Empleado.js';

// endpoint: /api/empleados
let getAllEmployees = async (req, res, next) => {
    try {
        let empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        next(error)
    }
};

// endpoint: /api/empleados/nombre/:nombre
let getEmployeeByName = async (req, res, next) => {
    try {
        let empleado = await Empleado.findOne({ nombre: req.params.nombre });
        if (!empleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json(empleado);
    } catch (error) {
        next(error)
    }
};

// endpoint: /api/empleados/cargo/:cargo
let getEmployeesByPosition = async (req, res, next) => {
    try {
        let empleados = await Empleado.find({ cargo: req.params.cargo });
        res.json(empleados);
    } catch (error) {
        next(error)
    }
};

export { getAllEmployees, getEmployeeByName, getEmployeesByPosition };