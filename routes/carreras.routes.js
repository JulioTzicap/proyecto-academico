const express = require('express');
const router = express.Router();
const {
    crearCarrera,
    obtenerCarreras,
    obtenerCarrera,
    actualizarCarrera,
    eliminarCarrera
} = require('../controllers/carreras.controller');

router.post('/carreras', crearCarrera);
router.get('/carreras', obtenerCarreras);
router.get('/carreras/:id', obtenerCarrera);
router.put('/carreras/:id', actualizarCarrera);
router.delete('/carreras/:id', eliminarCarrera);

module.exports = router;
