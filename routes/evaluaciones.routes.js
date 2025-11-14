const express = require('express');
const router = express.Router();
const evaluacionesController = require('../controllers/evaluaciones.controller');

router.post('/evaluaciones', evaluacionesController.crearEvaluacion);
router.get('/evaluaciones', evaluacionesController.obtenerEvaluaciones);
router.get('/evaluaciones/:id', evaluacionesController.obtenerEvaluacion);
router.put('/evaluaciones/:id', evaluacionesController.actualizarEvaluacion);
router.delete('/evaluaciones/:id', evaluacionesController.eliminarEvaluacion);

module.exports = router;
