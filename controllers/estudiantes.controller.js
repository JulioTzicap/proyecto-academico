const Estudiante = require('../models/estudiantes.model');

const crearEstudiante = async (req, res) => {
    try {
        const { usuario_id, nombre, apellido, correo, telefono, fecha_inscripcion, CUI } = req.body;

        const nuevoEstudiante = await Estudiante.create({
            usuario_id,
            nombre,
            apellido,
            correo,
            telefono,
            fecha_inscripcion,
            CUI
        });

        res.json(nuevoEstudiante);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiante.findByPk(id);

        if (!estudiante) {
            return res.status(404).json({ mensaje: "Estudiante no encontrado" });
        }

        res.json(estudiante);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario_id, nombre, apellido, correo, telefono, fecha_inscripcion, CUI } = req.body;

        const estudiante = await Estudiante.findByPk(id);

        if (!estudiante) {
            return res.status(404).json({ mensaje: "Estudiante no encontrado" });
        }

        await estudiante.update({
            usuario_id,
            nombre,
            apellido,
            correo,
            telefono,
            fecha_inscripcion,
            CUI
        });

        res.json(estudiante);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarEstudiante = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await Estudiante.findByPk(id);

        if (!estudiante) {
            return res.status(404).json({ mensaje: "Estudiante no encontrado" });
        }

        await estudiante.destroy();

        res.json({ mensaje: "Estudiante eliminado correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearEstudiante,
    obtenerEstudiantes,
    obtenerEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};
