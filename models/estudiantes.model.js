const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Usuario = require('./usuarios.model');

const Estudiante = db.define('estudiantes', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    
    CUI: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true
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

    fecha_inscripcion: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    tableName: 'estudiantes',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Usuario.hasOne(Estudiante, { foreignKey: 'usuario_id' });
Estudiante.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = Estudiante;
