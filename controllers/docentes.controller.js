const Docente = require('../models/docentes.model');

const crearDocente = async (req, res) => {
    try {
        const docente = await Docente.create(req.body);
        res.json(docente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerDocentes = async (req, res) => {
    try {
        const docentes = await Docente.findAll();
        res.json(docentes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerDocente = async (req, res) => {
    try {
        const docente = await Docente.findByPk(req.params.id);

        if (!docente) {
            return res.status(404).json({ mensaje: "Docente no encontrado" });
        }

        res.json(docente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarDocente = async (req, res) => {
    try {
        const docente = await Docente.findByPk(req.params.id);

        if (!docente) {
            return res.status(404).json({ mensaje: "Docente no encontrado" });
        }

        await docente.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(docente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarDocente = async (req, res) => {
    try {
        const docente = await Docente.findByPk(req.params.id);

        if (!docente) {
            return res.status(404).json({ mensaje: "Docente no encontrado" });
        }

        await docente.destroy();
        res.json({ mensaje: "Docente eliminado correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearDocente,
    obtenerDocentes,
    obtenerDocente,
    actualizarDocente,
    eliminarDocente
};
