const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ error: "No hay token" });

    const token = authHeader.split(' ')[1]; // Bearer <token>
    if (!token) return res.status(401).json({ error: "Token inválido" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded; // Guardamos info del usuario en req
        next();
    } catch (error) {
        res.status(401).json({ error: "Token expirado o inválido" });
    }
};

module.exports = { verificarToken };
