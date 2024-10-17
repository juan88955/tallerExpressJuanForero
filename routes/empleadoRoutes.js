import { Router } from 'express';
import { getAllEmployees, getEmployeeByName, getEmployeesByPosition } from '../controllers/empleados/read.js';
import { createEmployee, createManyEmployees } from '../controllers/empleados/create.js';

const router = Router()

// rutas de la API
router.get('/all', getAllEmployees) // endpoint: /api/empleados
router.get('/nombre/:nombre', getEmployeeByName) // endpoint: /api/empleados/nombre/:nombre
router.get('/cargo/:cargo', getEmployeesByPosition) // endpoint: /api/empleados/cargo/:cargo
router.post('/create', createEmployee) // endpoint: /api/empleados/create
router.post('/createMany', createManyEmployees) // endpoint: /api/empleados/createMany

export default router