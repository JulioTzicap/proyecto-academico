const Pago = require('../models/pago.model');

const crearPago = async (req, res) => {
    try {
        const pago = await Pago.create(req.body);
        res.json(pago);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerPagos = async (req, res) => {
    try {
        const pagos = await Pago.findAll();
        res.json(pagos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerPago = async (req, res) => {
    try {
        const pago = await Pago.findByPk(req.params.id);
        if (!pago) {
            return res.status(404).json({ mensaje: "Pago no encontrado" });
        }
        res.json(pago);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarPago = async (req, res) => {
    try {
        const pago = await Pago.findByPk(req.params.id);
        if (!pago) {
            return res.status(404).json({ mensaje: "Pago no encontrado" });
        }

        await pago.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(pago);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarPago = async (req, res) => {
    try {
        const pago = await Pago.findByPk(req.params.id);
        if (!pago) {
            return res.status(404).json({ mensaje: "Pago no encontrado" });
        }

        await pago.destroy();
        res.json({ mensaje: "Pago eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearPago,
    obtenerPagos,
    obtenerPago,
    actualizarPago,
    eliminarPago
};
