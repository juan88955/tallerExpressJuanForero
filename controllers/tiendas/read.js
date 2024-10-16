import Tienda from '../../models/Tienda.js';

// endpoint para obtener todos los nombres de las tiendas
let getAllTiendas = async (req, res) => {
    try {
        let tiendas = await Tienda.find();
        res.json(tiendas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// endpoint para obtener una dirección de una tienda
let getTiendaPorDireccion = async (req, res) => {
    try {
        let direccionDecodificada = decodeURIComponent(req.params.direccion);
        let tienda = await Tienda.findOne({ direccion: direccionDecodificada });
        if (!tienda) {
            return res.status(404).json({ message: 'Tienda no encontrada' });
        }
        res.json(tienda);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//endpoint para obtener un nombre de una tienda
let getTiendaPorNombre = async (req, res) => {
    try {
        let tienda = await Tienda.findOne({ nombre: req.params.nombre });
        if (!tienda) {
            return res.status(404).json({ message: 'Tienda no encontrada' });
        }
        res.json(tienda);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllTiendas, getTiendaPorDireccion, getTiendaPorNombre };