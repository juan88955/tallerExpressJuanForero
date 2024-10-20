import Tienda from "../../models/Tienda.js";

// crear una sola tienda
let createStore = async (req, res, next) => {
    try {
        let tienda = req.body;
        let newTienda = await Tienda.create(tienda);
        res.status(201).json(newTienda);
    } catch (error) {
        next(error)
    }
};

// crear múltiples tiendas
let createManyStores = async (req, res, next) => {
    try {
        let tiendas = req.body;
        let newTiendas = await Tienda.insertMany(tiendas);
        res.status(201).json(newTiendas);
    } catch (error) {
        next(error)
    }
};

export {createStore, createManyStores}