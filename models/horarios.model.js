const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Aula = require('./aulas.model');
const Seccion = require('./secciones.model');

const Horario = db.define('horarios', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    seccion_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    aula_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    dia: {
        type: DataTypes.ENUM('Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'),
        allowNull: false
    },

    hora_inicio: {
        type: DataTypes.TIME,
        allowNull: false
    },

    hora_fin: {
        type: DataTypes.TIME,
        allowNull: false
    }

}, {
    tableName: 'horarios',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Relaciones
Aula.hasMany(Horario, { foreignKey: 'aula_id' });
Horario.belongsTo(Aula, { foreignKey: 'aula_id' });

Seccion.hasMany(Horario, { foreignKey: 'seccion_id' });
Horario.belongsTo(Seccion, { foreignKey: 'seccion_id' });

module.exports = Horario;
