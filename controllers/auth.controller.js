const Usuario = require('../models/usuarios.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // 1️⃣ Buscar usuario
        const usuario = await Usuario.findOne({ where: { correo: username } });
        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

        // 2️⃣ Comparar contraseña
        const isMatch = await bcrypt.compare(password, usuario.contrasena);
        if (!isMatch) return res.status(400).json({ error: "Contraseña incorrecta" });

        // 3️⃣ Generar token
        const token = jwt.sign(
            { id: usuario.id, correo: usuario.correo, rol_id: usuario.rol_id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { login };
