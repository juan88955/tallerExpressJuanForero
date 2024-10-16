import Producto from "../../models/Producto.js";

// crear un solo producto
let create = async (req, res) => {
    try {
        let producto = req.body;
        let newProducto = await Producto.create(producto);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// crear múltiples productos
let createMany = async (req, res) => {
    try {
        let productos = req.body;

        if (!Array.isArray(productos)) {
            return res.status(400).json({ message: "Se espera un array de productos" }); // mensaje de error que se espera un array de productos
        }

        let newProductos = await Producto.insertMany(productos);
        res.status(201).json(newProductos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { create, createMany };