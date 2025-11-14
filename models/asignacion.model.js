const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Asignacion = db.define('asignaciones', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  docente_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  seccion_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'asignacion',
  timestamps: true,   // created_at / updated_at
  underscored: true
});

module.exports = Asignacion;
