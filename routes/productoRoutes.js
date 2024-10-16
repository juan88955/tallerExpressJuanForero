import { Router } from 'express';
import { getAllProductos, getProductoPorNombre, getProductosPorMarca } from '../controllers/productos/read.js';
import { create, createMany } from '../controllers/productos/create.js';

const router = Router()

// rutas de la API
router.get('/all', getAllProductos)
router.get('/nombre/:nombre', getProductoPorNombre)
router.get('/marca/:marca', getProductosPorMarca)
router.post('/create', create)
router.post('/createMany', createMany)

export default router