const Calificacion = require('../models/calificaciones.model');

const crearCalificacion = async (req, res) => {
    try {
        const calificacion = await Calificacion.create(req.body);
        res.json(calificacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerCalificaciones = async (req, res) => {
    try {
        const calificaciones = await Calificacion.findAll();
        res.json(calificaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerCalificacion = async (req, res) => {
    try {
        const calificacion = await Calificacion.findByPk(req.params.id);
        if (!calificacion) {
            return res.status(404).json({ mensaje: "Calificación no encontrada" });
        }
        res.json(calificacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarCalificacion = async (req, res) => {
    try {
        const calificacion = await Calificacion.findByPk(req.params.id);
        if (!calificacion) {
            return res.status(404).json({ mensaje: "Calificación no encontrada" });
        }

        await calificacion.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(calificacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarCalificacion = async (req, res) => {
    try {
        const calificacion = await Calificacion.findByPk(req.params.id);
        if (!calificacion) {
            return res.status(404).json({ mensaje: "Calificación no encontrada" });
        }

        await calificacion.destroy();
        res.json({ mensaje: "Calificación eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearCalificacion,
    obtenerCalificaciones,
    obtenerCalificacion,
    actualizarCalificacion,
    eliminarCalificacion
};
