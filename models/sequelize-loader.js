'use strict';
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@db/kuyasawa-hp'
);

module.exports = {
  sequelize,
  DataTypes
};