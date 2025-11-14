const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/usuarios', usuariosController.obtenerUsuarios);
router.get('/usuarios/:id', usuariosController.obtenerUsuario);
router.post('/usuarios', usuariosController.crearUsuario);
router.put('/usuarios/:id', usuariosController.actualizarUsuario);
router.delete('/usuarios/:id', usuariosController.eliminarUsuario);

module.exports = router;
