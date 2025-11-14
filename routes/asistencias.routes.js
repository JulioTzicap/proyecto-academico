const express = require('express');
const router = express.Router();
const asistenciasController = require('../controllers/asistencias.controller');

router.post('/asistencias', asistenciasController.crearAsistencia);
router.get('/asistencias', asistenciasController.obtenerAsistencias);
router.get('/asistencias/:id', asistenciasController.obtenerAsistencia);
router.put('/asistencias/:id', asistenciasController.actualizarAsistencia);
router.delete('/asistencias/:id', asistenciasController.eliminarAsistencia);

module.exports = router;
