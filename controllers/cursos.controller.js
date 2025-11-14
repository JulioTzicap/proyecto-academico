const Curso = require('../models/cursos.model');

const crearCurso = async (req, res) => {
    try {
        const curso = await Curso.create(req.body);
        res.json(curso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerCursos = async (req, res) => {
    try {
        const cursos = await Curso.findAll();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerCurso = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id);

        if (!curso) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }

        res.json(curso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarCurso = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id);

        if (!curso) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }

        await curso.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(curso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarCurso = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id);

        if (!curso) {
            return res.status(404).json({ mensaje: "Curso no encontrado" });
        }

        await curso.destroy();
        res.json({ mensaje: "Curso eliminado correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearCurso,
    obtenerCursos,
    obtenerCurso,
    actualizarCurso,
    eliminarCurso
};
