const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Usuario = require('./usuarios.model');

const Docente = db.define('docentes', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    telefono: {
        type: DataTypes.STRING(20),
        allowNull: true
    },

    fecha_contratacion: {
        type: DataTypes.DATE,
        allowNull: true
    },

    CUI: {
        type: DataTypes.STRING(20),
        allowNull: true
    }

}, {
    tableName: 'docentes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Relaciones
Usuario.hasOne(Docente, { foreignKey: 'usuario_id' });
Docente.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = Docente;
