import express from 'express';
import * as empleadoController from '../controllers/empleados/read.js';

const router = express.Router();

// Rutas de la API
router.get('/', empleadoController.getAllEmpleados);
router.get('/nombre/:nombre', empleadoController.getEmpleadoPorNombre);
router.get('/cargo/:cargo', empleadoController.getEmpleadosPorCargo);

export default router;