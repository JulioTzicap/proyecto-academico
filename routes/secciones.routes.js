const express = require('express');
const router = express.Router();

const {
    crearSeccion,
    obtenerSecciones,
    obtenerSeccion,
    actualizarSeccion,
    eliminarSeccion
} = require('../controllers/secciones.controller');

router.post('/api/secciones', crearSeccion);
router.get('/api/secciones', obtenerSecciones);
router.get('/api/secciones/:id', obtenerSeccion);
router.put('/api/secciones/:id', actualizarSeccion);
router.delete('/api/secciones/:id', eliminarSeccion);

module.exports = router;
