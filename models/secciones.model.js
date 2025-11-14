const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Curso = require('./cursos.model');

const Seccion = db.define('secciones', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    anio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    curso_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: 'secciones',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});


Curso.hasMany(Seccion, { foreignKey: 'curso_id' });
Seccion.belongsTo(Curso, { foreignKey: 'curso_id' });

module.exports = Seccion;
