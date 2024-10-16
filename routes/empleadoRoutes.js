import { Router } from 'express';
import { getAllEmpleados, getEmpleadoPorNombre, getEmpleadosPorCargo } from '../controllers/empleados/read.js';
import { createEmpleado, createManyEmpleados } from '../controllers/empleados/create.js';

const router = Router()

// rutas de la API
router.get('/all', getAllEmpleados) // endpoint: /api/empleados
router.get('/nombre/:nombre', getEmpleadoPorNombre) // endpoint: /api/empleados/nombre/:nombre
router.get('/cargo/:cargo', getEmpleadosPorCargo) // endpoint: /api/empleados/cargo/:cargo
router.post('/create', createEmpleado) // endpoint: /api/empleados/create
router.post('/createMany', createManyEmpleados) // endpoint: /api/empleados/createMany

export default router