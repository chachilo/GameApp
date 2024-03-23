const Videojuego = require('../models/videojuego.model');

exports.createVideojuego = async (req, res) => {
  try {
    const videojuego = new Videojuego(req.body);
    await videojuego.save();
    res.status(201).json(videojuego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllVideojuegos = async (req, res) => {
  try {
    const videojuegos = await Videojuego.find();
    res.json(videojuegos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getVideojuegoById = async (req, res) => {
  try {
    const videojuego = await Videojuego.findById(req.params.id);
    if (!videojuego) {
      return res.status(404).json({ message: 'Videojuego no encontrado' });
    }
    res.json(videojuego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateVideojuego = async (req, res) => {
  try {
    const videojuego = await Videojuego.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!videojuego) {
      return res.status(404).json({ message: 'Videojuego no encontrado' });
    }
    res.json(videojuego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteVideojuego = async (req, res) => {
  try {
    const videojuego = await Videojuego.findByIdAndDelete(req.params.id);
    if (!videojuego) {
      return res.status(404).json({ message: 'Videojuego no encontrado' });
    }
    res.json(videojuego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};