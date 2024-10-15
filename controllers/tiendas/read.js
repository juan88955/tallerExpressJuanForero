import Tienda from '../../models/Tienda.js';

// endpoint para obtener todos los nombres de las tiendas
const getAllTiendas = async (req, res) => {
    try {
        const tiendas = await Tienda.find();
        res.json(tiendas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// endpoint para obtener una dirección de una tienda
const getTiendaPorDireccion = async (req, res) => {
    try {
        const direccionDecodificada = decodeURIComponent(req.params.direccion);
        const tienda = await Tienda.findOne({ direccion: direccionDecodificada });
        if (!tienda) {
            return res.status(404).json({ message: 'Tienda no encontrada' });
        }
        res.json(tienda);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//endpoint para obtener un nombre de una tienda
const getTiendaPorNombre = async (req, res) => {
    try {
        const tienda = await Tienda.findOne({ nombre: req.params.nombre });
        if (!tienda) {
            return res.status(404).json({ message: 'Tienda no encontrada' });
        }
        res.json(tienda);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllTiendas, getTiendaPorDireccion, getTiendaPorNombre };