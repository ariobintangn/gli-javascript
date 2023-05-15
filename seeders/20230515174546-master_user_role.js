'use strict';
const fs = require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let master_user_roles = JSON.parse(fs.readFileSync('./data/user_roles.json','utf-8')).map(el=>{
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
  })
  return queryInterface.bulkInsert('master_user_roles',master_user_roles,{})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("master_user_roles", null,{})
  }
};
