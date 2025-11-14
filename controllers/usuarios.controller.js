const UsuariosModel = require('../models/usuarios.model');

const crearUsuario = async (req, res) => {
    try {
        const { rol_id, nombre, correo, contrasena, estado } = req.body;

        const nuevoUsuario = await UsuariosModel.create({
            rol_id,
            nombre,
            correo,
            contrasena,
            estado
        });

        res.json(nuevoUsuario);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuariosModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await UsuariosModel.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.json(usuario);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { rol_id, nombre, correo, contrasena, estado } = req.body;

        const usuario = await UsuariosModel.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        await usuario.update({
            rol_id,
            nombre,
            correo,
            contrasena,
            estado,
            updated_at: new Date()
        });

        res.json(usuario);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await UsuariosModel.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        await usuario.destroy();
        res.json({ mensaje: "Usuario eliminado correctamente" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
};
