import express from 'express';
import "dotenv/config.js";
import './config/database.js';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.js';
import not_found_handler from './middlewares/not_found_handler.js';
import error_handler from './middlewares/error_handler.js';
import validationErrorHandler from './middlewares/validation_error_handler.js';

// Configuración del servidor
const server = express();

// Configuración de puerto
const PORT = process.env.PORT || 8080;

// Callback para mostrar mensaje de inicio
const ready = () => console.log("Servidor listo en el puerto: " + PORT);

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));

// Router de la API
server.use('/api', indexRouter);

// Manejadores de errores
server.use(not_found_handler); // manejador de errores 404
server.use(validationErrorHandler); // manejador de errores de validación
server.use(error_handler); // manejador de errores 500 (general)

// Función de inicio del servidor
server.listen(PORT, ready);
