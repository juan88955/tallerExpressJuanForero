import express from 'express';
import "dotenv/config.js";
import './config/database.js';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.js';

const server = express();

const PORT = process.env.PORT || 8080;

const ready = () => console.log("Server ready on port: " + PORT);

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));

// Rutas
server.use('/api', indexRouter);

// Ruta de prueba
server.get('/', (req, res) => {
    res.send('Taller Express API is running');
});

// Manejo de rutas no encontradas
server.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Manejo de errores global
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

server.listen(PORT, ready);

export default server;