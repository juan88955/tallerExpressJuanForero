import express from 'express';
import * as tiendaController from '../controllers/tiendaController.js';

const router = express.Router();

router.get('/', tiendaController.getAllTiendas);
router.get('/direccion/:direccion', tiendaController.getTiendaPorDireccion);
router.get('/nombre/:nombre', tiendaController.getTiendaPorNombre);

export default router;