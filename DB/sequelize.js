const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '121615',
  database: 'hotmail-auto',
  port: 1216
});



module.exports = sequelize;
