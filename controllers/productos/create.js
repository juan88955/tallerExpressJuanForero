import Producto from "../../models/Producto.js";

// crear un solo producto
let createProduct = async (req, res, next) => {
    try {
        let producto = req.body;
        let newProducto = await Producto.create(producto);
        res.status(201).json(newProducto);
    } catch (error) {
        next(error)
    }
};

// crear múltiples productos
let createManyProducts = async (req, res, next) => {
    try {
        let productos = req.body;

        if (!Array.isArray(productos)) {
            return res.status(400).json({ message: "Se espera un array de productos" }); // mensaje de error que se espera un array de productos
        }

        let newProductos = await Producto.insertMany(productos);
        res.status(201).json(newProductos);
    } catch (error) {
        next(error)
    }
};

export { createProduct, createManyProducts };