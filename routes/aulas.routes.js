const express = require('express');
const router = express.Router();
const aulasController = require('../controllers/aulas.controller');

router.post('/aulas', aulasController.crearAula);
router.get('/aulas', aulasController.obtenerAulas);
router.get('/aulas/:id', aulasController.obtenerAula);
router.put('/aulas/:id', aulasController.actualizarAula);
router.delete('/aulas/:id', aulasController.eliminarAula);

module.exports = router;
