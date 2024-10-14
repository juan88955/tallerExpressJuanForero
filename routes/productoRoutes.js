import express from 'express';
import * as productoController from '../controllers/productoController.js';

const router = express.Router();

router.get('/', productoController.getAllProductos);
router.get('/nombre/:nombre', productoController.getProductoPorNombre);
router.get('/marca/:marca', productoController.getProductosPorMarca);

export default router;