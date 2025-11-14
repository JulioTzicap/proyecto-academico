const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Estudiante = require('./estudiantes.model');
const Seccion = require('./secciones.model');

const Matricula = db.define('matricula', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    estudiante_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    seccion_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }

}, {
    tableName: 'matricula',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Estudiante.hasMany(Matricula, { foreignKey: 'estudiante_id' });
Matricula.belongsTo(Estudiante, { foreignKey: 'estudiante_id' });

Seccion.hasMany(Matricula, { foreignKey: 'seccion_id' });
Matricula.belongsTo(Seccion, { foreignKey: 'seccion_id' });

module.exports = Matricula;
