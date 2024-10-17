import { Router } from 'express';
import { getAllStores, getStoreByAddress, getStoreByName } from '../controllers/tiendas/read.js';
import { createStore, createManyStores } from '../controllers/tiendas/create.js';

const router = Router()

// rutas de la API
router.get('/all', getAllStores) // endpoint: /api/tiendas
router.get('/direccion/:direccion', getStoreByAddress) // endpoint: /api/tiendas/direccion/:direccion
router.get('/nombre/:nombre', getStoreByName) // endpoint: /api/tiendas/nombre/:nombre
router.post('/create', createStore) // endpoint: /api/tiendas/create
router.post('/createMany', createManyStores) // endpoint: /api/tiendas/createMany

export default router