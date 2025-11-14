const express = require('express');
const router = express.Router();

const {
    crearDocente,
    obtenerDocentes,
    obtenerDocente,
    actualizarDocente,
    eliminarDocente
} = require('../controllers/docentes.controller');

router.post('/', crearDocente);
router.get('/', obtenerDocentes);
router.get('/:id', obtenerDocente);
router.put('/:id', actualizarDocente);
router.delete('/:id', eliminarDocente);

module.exports = router;
