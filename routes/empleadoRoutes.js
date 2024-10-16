import { Router } from 'express';
import { getAllEmpleados, getEmpleadoPorNombre, getEmpleadosPorCargo } from '../controllers/empleados/read.js';
import { createEmpleado, createManyEmpleados } from '../controllers/empleados/create.js';

const router = Router()

// rutas de la API
router.get('/all', getAllEmpleados)
router.get('/nombre/:nombre', getEmpleadoPorNombre)
router.get('/cargo/:cargo', getEmpleadosPorCargo)
router.post('/create', createEmpleado)
router.post('/createMany', createManyEmpleados)

export default router