// models/usuarios.model.js
const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Rol = require('./roles.model'); // Importamos el modelo de roles

const Usuario = db.define('usuarios', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    correo: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },

    contrasena: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    estado: {
        type: DataTypes.STRING(20),
        defaultValue: 'activo'
    }

}, {
    tableName: 'usuarios',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Relación: cada usuario pertenece a un rol
Usuario.belongsTo(Rol, {
    foreignKey: 'rol_id',
    as: 'rol'
});

module.exports = Usuario;
