const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Matricula = require('./matricula.model');

const Asistencia = db.define('asistencias', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    estado: {
        type: DataTypes.ENUM('Presente','Ausente','Justificado'),
        allowNull: false
    },

    matricula_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: 'asistencias',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Relaciones
Matricula.hasMany(Asistencia, { foreignKey: 'matricula_id' });
Asistencia.belongsTo(Matricula, { foreignKey: 'matricula_id' });

module.exports = Asistencia;
