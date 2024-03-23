const express = require('express');
const router = express.Router();
const videojuegoController = require('../controllers/videojuego.controller');

router.post('/', videojuegoController.createVideojuego);
router.get('/', videojuegoController.getAllVideojuegos);
router.get('/:id', videojuegoController.getVideojuegoById);
router.put('/:id', videojuegoController.updateVideojuego);
router.delete('/:id', videojuegoController.deleteVideojuego);

module.exports = router;