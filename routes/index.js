import express from 'express';
import tiendaRoutes from './tiendaRoutes.js';
import productoRoutes from './productoRoutes.js';
import empleadoRoutes from './empleadoRoutes.js';

const router = express.Router();

// Rutas de la API
router.use('/tiendas', tiendaRoutes); // endpoint: /api/tiendas
router.use('/productos', productoRoutes); // endpoint: /api/productos
router.use('/empleados', empleadoRoutes); // endpoint: /api/empleados

export default router;