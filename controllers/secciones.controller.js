const Seccion = require('../models/secciones.model');

const crearSeccion = async (req, res) => {
    try {
        const seccion = await Seccion.create(req.body);
        res.json(seccion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerSecciones = async (req, res) => {
    try {
        const secciones = await Seccion.findAll();
        res.json(secciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerSeccion = async (req, res) => {
    try {
        const seccion = await Seccion.findByPk(req.params.id);

        if (!seccion) {
            return res.status(404).json({ mensaje: "Sección no encontrada" });
        }

        res.json(seccion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarSeccion = async (req, res) => {
    try {
        const seccion = await Seccion.findByPk(req.params.id);

        if (!seccion) {
            return res.status(404).json({ mensaje: "Sección no encontrada" });
        }

        await seccion.update({
            ...req.body,
            updated_at: new Date()
        });

        res.json(seccion);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarSeccion = async (req, res) => {
    try {
        const seccion = await Seccion.findByPk(req.params.id);

        if (!seccion) {
            return res.status(404).json({ mensaje: "Sección no encontrada" });
        }

        await seccion.destroy();
        res.json({ mensaje: "Sección eliminada correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearSeccion,
    obtenerSecciones,
    obtenerSeccion,
    actualizarSeccion,
    eliminarSeccion
};
