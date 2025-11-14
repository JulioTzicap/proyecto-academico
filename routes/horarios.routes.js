const express = require('express');
const router = express.Router();
const horariosController = require('../controllers/horarios.controller');

router.post('/horarios', horariosController.crearHorario);
router.get('/horarios', horariosController.obtenerHorarios);
router.get('/horarios/:id', horariosController.obtenerHorario);
router.put('/horarios/:id', horariosController.actualizarHorario);
router.delete('/horarios/:id', horariosController.eliminarHorario);

module.exports = router;
