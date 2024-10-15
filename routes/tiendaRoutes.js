import express from 'express';
import * as tiendaController from '../controllers/tiendas/read.js';

const router = express.Router();

// Rutas de la API
router.get('/', tiendaController.getAllTiendas);
router.get('/direccion/:direccion', tiendaController.getTiendaPorDireccion);
router.get('/nombre/:nombre', tiendaController.getTiendaPorNombre);

export default router;