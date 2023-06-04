const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

module.exports = (sequelize, DataTypes) => {
const Tarea = sequelize.define('Tarea', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prioridad_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  completado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});
return Tarea;
}