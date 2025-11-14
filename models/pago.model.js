const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Estudiante = require('./estudiantes.model');

const Pago = db.define('pago', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    estudiante_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    monto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },

    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    metodo: {
        type: DataTypes.ENUM('Efectivo','Tarjeta','Transferencia'),
        allowNull: false
    }

}, {
    tableName: 'pago',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Relaciones
Estudiante.hasMany(Pago, { foreignKey: 'estudiante_id' });
Pago.belongsTo(Estudiante, { foreignKey: 'estudiante_id' });

module.exports = Pago;
