const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Matricula = require('./matricula.model');
const Evaluacion = require('./evaluaciones.model');

const Calificacion = db.define('calificaciones', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    valor: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: true
    },

    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },

    matricula_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    evaluacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: 'calificaciones',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Relaciones
Matricula.hasMany(Calificacion, { foreignKey: 'matricula_id' });
Calificacion.belongsTo(Matricula, { foreignKey: 'matricula_id' });

Evaluacion.hasMany(Calificacion, { foreignKey: 'evaluacion_id' });
Calificacion.belongsTo(Evaluacion, { foreignKey: 'evaluacion_id' });

module.exports = Calificacion;
