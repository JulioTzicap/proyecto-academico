const express = require('express');
const router = express.Router();
const {
    crearCurso,
    obtenerCursos,
    obtenerCurso,
    actualizarCurso,
    eliminarCurso
} = require('../controllers/cursos.controller');

router.post('/api/cursos', crearCurso);
router.get('/api/cursos', obtenerCursos);
router.get('/api/cursos/:id', obtenerCurso);
router.put('/api/cursos/:id', actualizarCurso);
router.delete('/api/cursos/:id', eliminarCurso);

module.exports = router;
