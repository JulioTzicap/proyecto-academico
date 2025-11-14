const { DataTypes } = require('sequelize');
const db = require('../db/db');

const RolesModel = db.define('roles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'roles',
  timestamps: true,          
  createdAt: 'created_at',    
  updatedAt: 'updated_at'
});

module.exports = RolesModel;
