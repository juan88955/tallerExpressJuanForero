import { Router } from 'express';
import { getAllProducts, getProductByName, getProductsByBrand } from '../controllers/productos/read.js';
import { createManyProducts, createProduct } from '../controllers/productos/create.js';

const router = Router()

// rutas de la API
router.get('/all', getAllProducts) // endpoint: /api/productos
router.get('/nombre/:nombre', getProductByName) // endpoint: /api/productos/nombre/:nombre
router.get('/marca/:marca', getProductsByBrand) // endpoint: /api/productos/marca/:marca
router.post('/create', createProduct) // endpoint: /api/productos/create
router.post('/createMany', createManyProducts) // endpoint: /api/productos/createMany

export default router