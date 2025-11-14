const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/roles.controller');

router.get('/roles', rolesController.obtenerRoles);
router.get('/roles/:id', rolesController.obtenerRol);
router.post('/roles', rolesController.crearRol);
router.put('/roles/:id', rolesController.actualizarRol);
router.delete('/roles/:id', rolesController.eliminarRol);

module.exports = router;
