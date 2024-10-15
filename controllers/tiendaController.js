import Tienda from '../models/Tienda.js';

// endpoint para obtener todos los nombres de las tiendas
export const getAllTiendas = async (req, res) => {
  try {
    const tiendas = await Tienda.find();
    res.json(tiendas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// endpoint para obtener una dirección de una tienda
export const getTiendaPorDireccion = async (req, res) => {
  try {
    const tienda = await Tienda.findOne({ direccion: req.params.direccion });
    if (!tienda) {
      return res.status(404).json({ message: 'Tienda no encontrada' });
    }
    res.json(tienda);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//endpoint para obtener un nombre de una tienda
export const getTiendaPorNombre = async (req, res) => {
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