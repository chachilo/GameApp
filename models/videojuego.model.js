const mongoose = require('mongoose');

const videojuegoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  genero: { type: String, required: true },
  desarrollador: { type: String, required: true },
  fechaLanzamiento: { type: Date, required: true }
});

module.exports = mongoose.model('Videojuego', videojuegoSchema);