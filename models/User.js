const { DataTypes } = require('sequelize');
const sequelize = require('../models/index');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
