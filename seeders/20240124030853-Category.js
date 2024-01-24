'use strict';

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

    await queryInterface.bulkInsert('categories', [
      {
        name: 'Burguer'
      },
      {
        name: 'Bread'
      },
      {
        name: 'Dressing'
      },
      {
        name: 'Stiff'
      },
      {
        name: 'Cheese'
      },
      {
        name: 'Green'
      },
      {
        name: 'Raw'
      },
      {
        name: 'Cooked'
      }
         
       ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {});
  }
};
