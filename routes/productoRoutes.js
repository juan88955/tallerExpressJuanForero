import { Router } from 'express';
import { getAllProductos, getProductoPorNombre, getProductosPorMarca } from '../controllers/productos/read.js';
import { create, createMany } from '../controllers/productos/create.js';

const router = Router()

// rutas de la API
router.get('/all', getAllProductos) // endpoint: /api/productos
router.get('/nombre/:nombre', getProductoPorNombre) // endpoint: /api/productos/nombre/:nombre
router.get('/marca/:marca', getProductosPorMarca) // endpoint: /api/productos/marca/:marca
router.post('/create', create) // endpoint: /api/productos/create
router.post('/createMany', createMany) // endpoint: /api/productos/createMany

export default router