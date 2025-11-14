// models/usuarios.model.js
const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Rol = require('./roles.model'); // Importamos el modelo de roles
const bcrypt = require('bcryptjs');

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
        unique: true,
        validate: {
            isEmail: true
        }
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
    updatedAt: 'updated_at',
    hooks: {
        // Antes de guardar el usuario, encriptar la contraseña
        beforeCreate: async (usuario) => {
            if (usuario.contrasena) {
                const salt = await bcrypt.genSalt(10);
                usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);
            }
        },
        beforeUpdate: async (usuario) => {
            if (usuario.contrasena && usuario.changed('contrasena')) {
                const salt = await bcrypt.genSalt(10);
                usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);
            }
        }
    }
});

// Relación con rol
Usuario.belongsTo(Rol, {
    foreignKey: 'rol_id',
    as: 'rol'
});

module.exports = Usuario;
