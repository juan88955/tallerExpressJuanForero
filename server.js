import express from 'express';
import "dotenv/config.js";
import './config/database.js';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.js';

// Configuración del servidor
const server = express();

// Configuración de puerto
const PORT = process.env.PORT || 8080;

// Callback para mostrar mensaje de inicio
const ready = () => console.log("Server ready on port: " + PORT);

// Middleware
server.use(express.json()); //permite que los datos enviados sean en formato json
server.use(express.urlencoded({ extended: true })); // permite trabajar con URL en entrada y salida
server.use(cors()); // permite el uso de CORS
server.use(morgan('dev')); // registrar las peticiones en el servidor

// Router de la API
server.use('/api', indexRouter);


server.listen(PORT, ready);

