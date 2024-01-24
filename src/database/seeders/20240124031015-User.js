'use strict';

const bycript = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [
      
        {
          name: "administrador",
          email: "administrador@gmail.com",
          date: "2024-01-24",
          address: "calle 15",
          phone: "15123456",
          password: bycript.hashSync('administrador',10),
          avatar: "default-avatar.png",
          roles_id: 1
        },
        {
          name: "usuario",
          email: "usuario@hotmail.com",
          date: "2023-11-01",
          address: "calle falsas 123",
          phone: "15123456",
          password: bycript.hashSync('usuario',10),
          avatar: "default-avatar.png",
          roles_id: 2
        },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
