const express = require('express');
const mongoose = require('mongoose');
const Videojuego = require('./models/videojuego.model');

const app = express();

mongoose.connect('mongodb+srv://rafael3041220219:Casterfiler25%40@cluster0.m9fchhq.mongodb.net/test?authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.post('/api/videojuegos', async (req, res) => {
  try {
    const videojuego = new Videojuego(req.body);
    await videojuego.save();
    res.status(201).json(videojuego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/videojuegos', async (req, res) => {
  try {
    const videojuegos = await Videojuego.find();
    res.status(200).json(videojuegos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/videojuegos/:id', async (req, res) => {
  try {
    const videojuego = await Videojuego.findById(req.params.id);
    if (!videojuego) {
      return res.status(404).json({ message: 'Videojuego no encontrado' });
    }
    res.status(200).json(videojuego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/api/videojuegos/:id', async (req, res) => {
  try {
    const videojuego = await Videojuego.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!videojuego) {
      return res.status(404).json({ message: 'Videojuego no encontrado' });
    }
    res.status(200).json(videojuego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/api/videojuegos/:id', async (req, res) => {
  try {
    const videojuego = await Videojuego.findByIdAndDelete(req.params.id);
    if (!videojuego) {
      return res.status(404).json({ message: 'Videojuego no encontrado' });
    }
    res.status(200).json({ message: 'Videojuego eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});