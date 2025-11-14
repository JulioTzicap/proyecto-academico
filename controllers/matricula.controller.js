const Matricula = require('../models/matricula.model');

const crearMatricula = async (req, res) => {
    try {
        const matricula = await Matricula.create(req.body);
        res.json(matricula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerMatriculas = async (req, res) => {
    try {
        const matriculas = await Matricula.findAll();
        res.json(matriculas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerMatricula = async (req, res) => {
    try {
        const matricula = await Matricula.findByPk(req.params.id);

        if (!matricula) {
            return res.status(404).json({ mensaje: "Matrícula no encontrada" });
        }

        res.json(matricula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarMatricula = async (req, res) => {
    try {
        const matricula = await Matricula.findByPk(req.params.id);

        if (!matricula) {
            return res.status(404).json({ mensaje: "Matrícula no encontrada" });
        }

        await matricula.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(matricula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarMatricula = async (req, res) => {
    try {
        const matricula = await Matricula.findByPk(req.params.id);

        if (!matricula) {
            return res.status(404).json({ mensaje: "Matrícula no encontrada" });
        }

        await matricula.destroy();
        res.json({ mensaje: "Matrícula eliminada correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearMatricula,
    obtenerMatriculas,
    obtenerMatricula,
    actualizarMatricula,
    eliminarMatricula
};
