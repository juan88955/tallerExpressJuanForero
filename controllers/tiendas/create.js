import Tienda from "../../models/Tienda.js";

// crear una sola tienda
let createTienda = async (req, res) => {
    try {
        let tienda = req.body;
        let newTienda = await Tienda.create(tienda);
        res.status(201).json(newTienda);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// crear múltiples tiendas
let createManyTiendas = async (req, res) => {
    try {
        let tiendas = req.body;

        if (!Array.isArray(tiendas)) {
            return res.status(400).json({ message: "Se espera un array de tiendas" });
        }

        let newTiendas = await Tienda.insertMany(tiendas);
        res.status(201).json(newTiendas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createTienda, createManyTiendas };