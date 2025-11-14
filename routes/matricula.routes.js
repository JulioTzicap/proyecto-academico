const express = require('express');
const router = express.Router();
const {
    crearMatricula,
    obtenerMatriculas,
    obtenerMatricula,
    actualizarMatricula,
    eliminarMatricula
} = require('../controllers/matricula.controller');

router.post('/', crearMatricula);
router.get('/', obtenerMatriculas);
router.get('/:id', obtenerMatricula);
router.put('/:id', actualizarMatricula);
router.delete('/:id', eliminarMatricula);

module.exports = router;
