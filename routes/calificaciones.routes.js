const express = require('express');
const router = express.Router();
const calificacionesController = require('../controllers/calificaciones.controller');

router.post('/calificaciones', calificacionesController.crearCalificacion);
router.get('/calificaciones', calificacionesController.obtenerCalificaciones);
router.get('/calificaciones/:id', calificacionesController.obtenerCalificacion);
router.put('/calificaciones/:id', calificacionesController.actualizarCalificacion);
router.delete('/calificaciones/:id', calificacionesController.eliminarCalificacion);

module.exports = router;
