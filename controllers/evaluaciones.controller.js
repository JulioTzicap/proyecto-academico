const Evaluacion = require('../models/evaluaciones.model');

const crearEvaluacion = async (req, res) => {
    try {
        const evaluacion = await Evaluacion.create(req.body);
        res.json(evaluacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerEvaluaciones = async (req, res) => {
    try {
        const evaluaciones = await Evaluacion.findAll();
        res.json(evaluaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerEvaluacion = async (req, res) => {
    try {
        const evaluacion = await Evaluacion.findByPk(req.params.id);
        if (!evaluacion) {
            return res.status(404).json({ mensaje: "Evaluación no encontrada" });
        }
        res.json(evaluacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarEvaluacion = async (req, res) => {
    try {
        const evaluacion = await Evaluacion.findByPk(req.params.id);
        if (!evaluacion) {
            return res.status(404).json({ mensaje: "Evaluación no encontrada" });
        }

        await evaluacion.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(evaluacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarEvaluacion = async (req, res) => {
    try {
        const evaluacion = await Evaluacion.findByPk(req.params.id);
        if (!evaluacion) {
            return res.status(404).json({ mensaje: "Evaluación no encontrada" });
        }

        await evaluacion.destroy();
        res.json({ mensaje: "Evaluación eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearEvaluacion,
    obtenerEvaluaciones,
    obtenerEvaluacion,
    actualizarEvaluacion,
    eliminarEvaluacion
};
