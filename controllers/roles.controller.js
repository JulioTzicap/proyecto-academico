const RolesModel = require('../models/roles.model');


const crearRol = async (req, res) => {
    try {

        const { nombre, descripcion } = req.body;

        const nuevoRol = await RolesModel.create({
            nombre,
            descripcion
        });

        res.json(nuevoRol);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const obtenerRoles = async (req, res) => {
    try {

        const roles = await RolesModel.findAll();
        res.json(roles);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const obtenerRol = async (req, res) => {
    try {

        const { id } = req.params;

        const rol = await RolesModel.findByPk(id);

        if (!rol) {
            return res.status(404).json({ mensaje: "Rol no encontrado" });
        }

        res.json(rol);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const actualizarRol = async (req, res) => {
    try {

        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        const rol = await RolesModel.findByPk(id);

        if (!rol) {
            return res.status(404).json({ mensaje: "Rol no encontrado" });
        }

        await rol.update({
            nombre,
            descripcion,
            updated_at: new Date()
        });

        res.json(rol);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarRol = async (req, res) => {
    try {

        const { id } = req.params;

        const rol = await RolesModel.findByPk(id);

        if (!rol) {
            return res.status(404).json({ mensaje: "Rol no encontrado" });
        }

        await rol.destroy();

        res.json({ mensaje: "Rol eliminado correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    crearRol,
    obtenerRoles,
    obtenerRol,
    actualizarRol,
    eliminarRol
};
