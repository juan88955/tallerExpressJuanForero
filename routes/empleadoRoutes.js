import express from 'express';
import * as empleadoController from '../controllers/empleadoController.js';

const router = express.Router();

router.get('/', empleadoController.getAllEmpleados);
router.get('/nombre/:nombre', empleadoController.getEmpleadoPorNombre);
router.get('/cargo/:cargo', empleadoController.getEmpleadosPorCargo);

export default router;