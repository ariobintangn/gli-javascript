'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class master_user_role extends Model {
    static associate(models) {
      master_user_role.hasMany(models.master_user, {foreignKey:"roleId"})
    }
  }
  master_user_role.init({
    role_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'master_user_role',
  });
  return master_user_role;
};