import Producto from '../models/Producto.js';

export const getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductoPorNombre = async (req, res) => {
    try {
        const producto = await Producto.findOne({ nombre: req.params.nombre });
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProductosPorMarca = async (req, res) => {
    try {
        const productos = await Producto.find({ marca: req.params.marca });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};