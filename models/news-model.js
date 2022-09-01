'use strict';
const {sequelize, DataTypes} = require('./sequelize-loader');

const News = sequelize.define(
  'news-items',
  {
    newsId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    newsDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    newsContent: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = News;