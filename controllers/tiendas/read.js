import Tienda from '../../models/Tienda.js';

// endpoint para obtener todos los nombres de las tiendas
let getAllStores= async (req, res, next) => {
    try {
        let tiendas = await Tienda.find();
        res.json(tiendas);
    } catch (error) {
        next(error)
    }
};

// endpoint para obtener una dirección de una tienda
let getStoreByAddress = async (req, res, next) => {
    try {
        let direccionDecodificada = decodeURIComponent(req.params.direccion);
        let tienda = await Tienda.findOne({ direccion: direccionDecodificada });
        if (!tienda) {
            return res.status(404).json({ message: 'Tienda no encontrada' });
        }
        res.json(tienda);
    } catch (error) {
        next(error)
    }
};

//endpoint para obtener un nombre de una tienda
let getStoreByName = async (req, res, next) => {
    try {
        let tienda = await Tienda.findOne({ nombre: req.params.nombre });
        if (!tienda) {
            return res.status(404).json({ message: 'Tienda no encontrada' });
        }
        res.json(tienda);
    } catch (error) {
        next(error)
    }
};

export { getAllStores, getStoreByAddress, getStoreByName }