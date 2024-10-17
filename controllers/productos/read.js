import Producto from '../../models/Producto.js';

// endpoint para obtener todos los productos
let getAllProducts = async (req, res, next) => {
    try {
        let productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        next(error)
    }
};

//endpoint para obtener un producto por su nombre
let getProductByName = async (req, res, next) => {
    try {
        let producto = await Producto.findOne({ nombre: req.params.nombre });
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        req, res, next
    }
};

//endpoint para obtener todos los productos de una marca
let getProductsByBrand = async (req, res, next) => {
    try {
        let productos = await Producto.find({ marca: req.params.marca });
        res.json(productos);
    } catch (error) {
        next(error)
    }
};

export { getAllProducts, getProductByName, getProductsByBrand };