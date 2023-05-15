'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_user extends Model {
    static associate(models) {
      master_user.belongsTo(models.master_user_role, {foreignKey:"roleId"})
    }
  }
  master_user.init({
    name: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'master_user',
  });
  return master_user;
};