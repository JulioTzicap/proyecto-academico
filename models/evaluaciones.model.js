const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Seccion = require('./secciones.model');

const Evaluacion = db.define('evaluaciones', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    seccion_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }

}, {
    tableName: 'evaluaciones',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Relaciones
Seccion.hasMany(Evaluacion, { foreignKey: 'seccion_id' });
Evaluacion.belongsTo(Seccion, { foreignKey: 'seccion_id' });

module.exports = Evaluacion;
