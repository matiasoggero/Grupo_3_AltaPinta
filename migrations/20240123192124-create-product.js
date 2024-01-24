'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(5.2),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      categories_id: {
        type: Sequelize.INTEGER(10),
        references: {
          model: 'categories',
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};