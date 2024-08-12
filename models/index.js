const { Sequelize } = require('sequelize');

// Example for MySQL
const sequelize = new Sequelize('developer', 'root', 'Badal@123', {
  host: 'localhost',
  dialect: 'mysql' // Choose one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' | 'sqlite'
});

module.exports = sequelize;
