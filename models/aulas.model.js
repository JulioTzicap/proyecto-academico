const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Aula = db.define('aulas', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    ubicacion: {
        type: DataTypes.STRING(100),
        allowNull: true
    }

}, {
    tableName: 'aulas',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Aula;
