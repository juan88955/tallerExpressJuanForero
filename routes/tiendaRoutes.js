import { Router } from 'express';
import { getAllTiendas, getTiendaPorDireccion, getTiendaPorNombre } from '../controllers/tiendas/read.js';
import { createTienda, createManyTiendas } from '../controllers/tiendas/create.js';

const router = Router()

// rutas de la API
router.get('/all', getAllTiendas) // endpoint: /api/tiendas
router.get('/direccion/:direccion', getTiendaPorDireccion) // endpoint: /api/tiendas/direccion/:direccion
router.get('/nombre/:nombre', getTiendaPorNombre) // endpoint: /api/tiendas/nombre/:nombre
router.post('/create', createTienda) // endpoint: /api/tiendas/create
router.post('/createMany', createManyTiendas) // endpoint: /api/tiendas/createMany

export default router