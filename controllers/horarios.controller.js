const Horario = require('../models/horarios.model');

const crearHorario = async (req, res) => {
    try {
        const horario = await Horario.create(req.body);
        res.json(horario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerHorarios = async (req, res) => {
    try {
        const horarios = await Horario.findAll();
        res.json(horarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerHorario = async (req, res) => {
    try {
        const horario = await Horario.findByPk(req.params.id);
        if (!horario) {
            return res.status(404).json({ mensaje: "Horario no encontrado" });
        }
        res.json(horario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarHorario = async (req, res) => {
    try {
        const horario = await Horario.findByPk(req.params.id);
        if (!horario) {
            return res.status(404).json({ mensaje: "Horario no encontrado" });
        }

        await horario.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(horario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarHorario = async (req, res) => {
    try {
        const horario = await Horario.findByPk(req.params.id);
        if (!horario) {
            return res.status(404).json({ mensaje: "Horario no encontrado" });
        }

        await horario.destroy();
        res.json({ mensaje: "Horario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearHorario,
    obtenerHorarios,
    obtenerHorario,
    actualizarHorario,
    eliminarHorario
};
