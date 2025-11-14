const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantes.controller');

router.post('/estudiantes', estudiantesController.crearEstudiante);

router.get('/estudiantes', estudiantesController.obtenerEstudiantes);

router.get('/estudiantes/:id', estudiantesController.obtenerEstudiante);

router.put('/estudiantes/:id', estudiantesController.actualizarEstudiante);

router.delete('/estudiantes/:id', estudiantesController.eliminarEstudiante);

module.exports = router;
