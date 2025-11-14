const Aula = require('../models/aulas.model');

const crearAula = async (req, res) => {
    try {
        const aula = await Aula.create(req.body);
        res.json(aula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerAulas = async (req, res) => {
    try {
        const aulas = await Aula.findAll();
        res.json(aulas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerAula = async (req, res) => {
    try {
        const aula = await Aula.findByPk(req.params.id);
        if (!aula) {
            return res.status(404).json({ mensaje: "Aula no encontrada" });
        }
        res.json(aula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarAula = async (req, res) => {
    try {
        const aula = await Aula.findByPk(req.params.id);
        if (!aula) {
            return res.status(404).json({ mensaje: "Aula no encontrada" });
        }

        await aula.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(aula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarAula = async (req, res) => {
    try {
        const aula = await Aula.findByPk(req.params.id);
        if (!aula) {
            return res.status(404).json({ mensaje: "Aula no encontrada" });
        }

        await aula.destroy();
        res.json({ mensaje: "Aula eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearAula,
    obtenerAulas,
    obtenerAula,
    actualizarAula,
    eliminarAula
};
