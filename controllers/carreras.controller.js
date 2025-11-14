const Carrera = require('../models/carreras.model');

const crearCarrera = async (req, res) => {
    try {
        const carrera = await Carrera.create(req.body);
        res.json(carrera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerCarreras = async (req, res) => {
    try {
        const carreras = await Carrera.findAll();
        res.json(carreras);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerCarrera = async (req, res) => {
    try {
        const carrera = await Carrera.findByPk(req.params.id);

        if (!carrera) {
            return res.status(404).json({ mensaje: "Carrera no encontrada" });
        }

        res.json(carrera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarCarrera = async (req, res) => {
    try {
        const carrera = await Carrera.findByPk(req.params.id);

        if (!carrera) {
            return res.status(404).json({ mensaje: "Carrera no encontrada" });
        }

        await carrera.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(carrera);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarCarrera = async (req, res) => {
    try {
        const carrera = await Carrera.findByPk(req.params.id);

        if (!carrera) {
            return res.status(404).json({ mensaje: "Carrera no encontrada" });
        }

        await carrera.destroy();
        res.json({ mensaje: "Carrera eliminada correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearCarrera,
    obtenerCarreras,
    obtenerCarrera,
    actualizarCarrera,
    eliminarCarrera
};
