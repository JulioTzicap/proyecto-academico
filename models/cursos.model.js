const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Carrera = require('./carreras.model');

const Curso = db.define('cursos', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    carrera_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: 'cursos',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});


Carrera.hasMany(Curso, { foreignKey: 'carrera_id' });
Curso.belongsTo(Carrera, { foreignKey: 'carrera_id' });

module.exports = Curso;
