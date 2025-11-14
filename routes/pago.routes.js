const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pago.controller');

router.post('/pago', pagoController.crearPago);
router.get('/pago', pagoController.obtenerPagos);
router.get('/pago/:id', pagoController.obtenerPago);
router.put('/pago/:id', pagoController.actualizarPago);
router.delete('/pago/:id', pagoController.eliminarPago);

module.exports = router;
