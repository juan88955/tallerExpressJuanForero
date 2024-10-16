import { Router } from 'express';
import { getAllTiendas, getTiendaPorDireccion, getTiendaPorNombre } from '../controllers/tiendas/read.js';
import { createTienda, createManyTiendas } from '../controllers/tiendas/create.js';

const router = Router()

// rutas de la API
router.get('/all', getAllTiendas)
router.get('/direccion/:direccion', getTiendaPorDireccion)
router.get('/nombre/:nombre', getTiendaPorNombre)
router.post('/create', createTienda)
router.post('/createMany', createManyTiendas)

export default router