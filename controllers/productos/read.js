import Producto from '../../models/Producto.js';

// endpoint para obtener todos los productos
let getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//endpoint para obtener un producto por su nombre
let getProductoPorNombre = async (req, res) => {
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

//endpoint para obtener todos los productos de una marca
let getProductosPorMarca = async (req, res) => {
    try {
        const productos = await Producto.find({ marca: req.params.marca });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllProductos, getProductoPorNombre, getProductosPorMarca };