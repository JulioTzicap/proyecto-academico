const Asistencia = require('../models/asistencias.model');

const crearAsistencia = async (req, res) => {
    try {
        const asistencia = await Asistencia.create(req.body);
        res.json(asistencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerAsistencias = async (req, res) => {
    try {
        const asistencias = await Asistencia.findAll();
        res.json(asistencias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerAsistencia = async (req, res) => {
    try {
        const asistencia = await Asistencia.findByPk(req.params.id);
        if (!asistencia) {
            return res.status(404).json({ mensaje: "Asistencia no encontrada" });
        }
        res.json(asistencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarAsistencia = async (req, res) => {
    try {
        const asistencia = await Asistencia.findByPk(req.params.id);
        if (!asistencia) {
            return res.status(404).json({ mensaje: "Asistencia no encontrada" });
        }

        await asistencia.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(asistencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarAsistencia = async (req, res) => {
    try {
        const asistencia = await Asistencia.findByPk(req.params.id);
        if (!asistencia) {
            return res.status(404).json({ mensaje: "Asistencia no encontrada" });
        }

        await asistencia.destroy();
        res.json({ mensaje: "Asistencia eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearAsistencia,
    obtenerAsistencias,
    obtenerAsistencia,
    actualizarAsistencia,
    eliminarAsistencia
};
