const { DataTypes } = require('sequelize');
const db = require('../db/db');  // ✔ tu conexión real

const Carrera = db.define('carreras', {

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
    }

}, {
    tableName: 'carreras',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Carrera;
