import express from 'express';
import tiendaRoutes from './tiendaRoutes.js';
import productoRoutes from './productoRoutes.js';
import empleadoRoutes from './empleadoRoutes.js';

const router = express.Router();

// Rutas de la API
router.use('/tiendas', tiendaRoutes);
router.use('/productos', productoRoutes);
router.use('/empleados', empleadoRoutes);

export default router;